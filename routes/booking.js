const express = require("express");
const router = express.Router();

const Booking = require("../models/booking");
const Listing = require("../models/listing");
const Payment = require("../models/payment");

const wrapAsync = require("../utils/wrapAsync");
const PDFDocument = require("pdfkit");

// ======================================================
// CREATE BOOKING
// ======================================================

router.post("/:listingId", wrapAsync(async (req, res) => {

    if (!req.isAuthenticated()) {
        return res.status(401).json({
            success: false,
            error: "Please login first"
        });
    }

    const listing = await Listing.findById(req.params.listingId);

    if (!listing) {
        return res.status(404).json({
            success: false,
            error: "Listing not found"
        });
    }

    const guests = Number(req.body.guests) || 1;

    const checkIn = new Date(req.body.checkIn);
    const checkOut = new Date(req.body.checkOut);




    // ======================================
// CHECK AVAILABILITY
// ======================================

const existingBooking = await Booking.findOne({
    listing: listing._id,
    status: { $ne: "cancelled" },
    checkIn: { $lt: checkOut },
    checkOut: { $gt: checkIn }
});

if (existingBooking) {

    req.flash(
        "error",
        "This listing is already booked for the selected dates."
    );

    return res.redirect(`/listings/${listing._id}`);
}



    const nights = Math.ceil(
        (checkOut - checkIn) /
        (1000 * 60 * 60 * 24)
    );

    if (nights <= 0) {
        return res.status(400).json({
            success: false,
            error: "Invalid booking dates"
        });
    }

    const totalPrice =
        (listing.price * nights) +
        500 +
        350;

    const transactionId =
        "TXN-" +
        Date.now() +
        Math.floor(Math.random() * 1000);

    const booking = new Booking({

        listing: listing._id,

        user: req.user._id,

        checkIn,

        checkOut,

        guests,

        totalPrice,

        status: "confirmed",

        paymentStatus: "SUCCESS",

        transactionId

    });

    await booking.save();

    const payment = new Payment({

        booking: booking._id,

        user: req.user._id,

        listing: listing._id,

        transactionId,

        amount: totalPrice,

        paymentMethod:
            req.body.paymentMethod || "UPI",

        status: "SUCCESS"

    });

    await payment.save();

    res.redirect(
        `/booking/payment-success/${booking._id}`
    );

}));

// ======================================================
// PAYMENT SUCCESS PAGE
// ======================================================

router.get(
"/payment-success/:id",
wrapAsync(async(req,res)=>{

    if(!req.isAuthenticated()){

        req.flash(
            "error",
            "Please login first"
        );

        return res.redirect("/login");

    }

    const booking =
    await Booking.findById(req.params.id)
    .populate("listing")
    .populate("user");

    if(!booking){

        req.flash(
            "error",
            "Booking not found"
        );

        return res.redirect("/listings");

    }

    res.render(
        "bookings/paymentSuccess",
        {
            booking
        }
    );

}));


// ======================================================
// BOOKING CONFIRMATION PAGE
// ======================================================

router.get(
"/confirm/:id",
wrapAsync(async(req,res)=>{

    if(!req.isAuthenticated()){

        req.flash(
            "error",
            "Please login first"
        );

        return res.redirect("/login");

    }

    const booking =
    await Booking.findById(req.params.id)
    .populate("listing")
    .populate("user");

    if(!booking){

        req.flash(
            "error",
            "Booking not found"
        );

        return res.redirect("/listings");

    }

    res.render(
        "bookings/confirm",
        {
            booking
        }
    );

}));

// ======================================================
// VIEW BOOKING DETAILS
// ======================================================

router.get(
    "/:bookingId",
    wrapAsync(async (req, res) => {

        if (!req.isAuthenticated()) {

            req.flash(
                "error",
                "Please login first"
            );

            return res.redirect("/login");
        }

        const booking = await Booking.findById(req.params.bookingId)
            .populate({
                path: "listing",
                populate: {
                    path: "owner"
                }
            })
            .populate("user");

        if (!booking) {

            req.flash(
                "error",
                "Booking not found"
            );

            return res.redirect("/trips");
        }

        // Only the person who made the booking can view it
        if (!booking.user._id.equals(req.user._id)) {

            req.flash(
                "error",
                "Unauthorized access"
            );

            return res.redirect("/trips");
        }

        const today = new Date();

        let bookingType = "upcoming";

        if (booking.status === "cancelled") {
            bookingType = "cancelled";
        } else if (booking.checkOut < today) {
            bookingType = "completed";
        }

        const nights = Math.ceil(
            (booking.checkOut - booking.checkIn) /
            (1000 * 60 * 60 * 24)
        );

        res.render(
            "bookings/show",
            {
                booking,
                nights,
                bookingType
            }
        );

    })
);


// ======================================================
// CANCEL BOOKING
// ======================================================

router.delete(
"/:bookingId",
wrapAsync(async(req,res)=>{

    if(!req.isAuthenticated()){

        req.flash(
            "error",
            "Please login first"
        );

        return res.redirect("/login");

    }

    const booking = await Booking.findById(req.params.bookingId);

    if(!booking){

        req.flash(
            "error",
            "Booking not found"
        );

        return res.redirect("/trips");

    }

    if(!booking.user.equals(req.user._id)){

        req.flash(
            "error",
            "You cannot cancel this booking"
        );

        return res.redirect("/trips");

    }

    booking.status = "cancelled";

    await booking.save();

    await Payment.findOneAndUpdate(
        { booking: booking._id },
        { status: "FAILED" }
    );

    req.flash(
        "success",
        "Booking cancelled successfully"
    );

    res.redirect("/trips");

}));

// ======================================================
// DOWNLOAD INVOICE
// ======================================================

router.get(
    "/:bookingId/invoice",
    wrapAsync(async (req, res) => {

        if (!req.isAuthenticated()) {
            req.flash("error", "Please login first");
            return res.redirect("/login");
        }

        const booking = await Booking.findById(req.params.bookingId)
    .populate({
        path: "listing",
        populate: {
            path: "owner"
        }
    })
    .populate("user");

        if (!booking) {
            req.flash("error", "Booking not found");
            return res.redirect("/trips");
        }

        const doc = new PDFDocument({
            margin: 50
        });

        res.setHeader(
            "Content-Type",
            "application/pdf"
        );

        res.setHeader(
            "Content-Disposition",
            `attachment; filename=Invoice-${booking._id}.pdf`
        );

        doc.pipe(res);

        doc.fontSize(22).text("NikStays Invoice", {
            align: "center"
        });

        doc.moveDown();

        doc.fontSize(14).text(`Booking ID: ${booking._id}`);
        doc.text(`Transaction ID: ${booking.transactionId}`);
        doc.text(`Guest: ${booking.user.username}`);
        doc.text(`Listing: ${booking.listing.title}`);
        doc.text(`Location: ${booking.listing.location}`);
        doc.text(`Check-in: ${booking.checkIn.toDateString()}`);
        doc.text(`Check-out: ${booking.checkOut.toDateString()}`);
        doc.text(`Guests: ${booking.guests}`);
        doc.moveDown();

        doc.fontSize(18).text(
            `Total Paid: ₹${booking.totalPrice}`
        );

        doc.moveDown();

        doc.text(
            "Thank you for booking with NikStays!"
        );

        doc.end();

    })
);



module.exports = router;