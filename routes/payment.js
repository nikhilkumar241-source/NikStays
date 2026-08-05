const express = require("express");
const router = express.Router();

const Booking = require("../models/booking");
const wrapAsync = require("../utils/wrapAsync");
const { sendEmail } = require("../utils/sendEmail");


// ================= PAYMENT PAGE =================

router.get("/:bookingId", wrapAsync(async (req, res) => {

    if (!req.isAuthenticated()) {
        req.flash("error", "Please login first");
        return res.redirect("/login");
    }


    let booking = await Booking.findById(req.params.bookingId)
        .populate("listing");


    if (!booking) {
        req.flash("error", "Booking not found");
        return res.redirect("/listings");
    }


    res.render("payments/payment", {
        booking
    });

}));


// ================= PAYMENT SUCCESS =================

router.post("/:bookingId/success", wrapAsync(async (req, res) => {


    if (!req.isAuthenticated()) {
        req.flash("error", "Please login first");
        return res.redirect("/login");
    }


    let booking = await Booking.findById(req.params.bookingId)
        .populate("listing");


    if (!booking) {
        req.flash("error", "Booking not found");
        return res.redirect("/listings");
    }



    booking.status = "confirmed";

    await booking.save();



    await sendEmail(

        req.user.email,

        "Booking Confirmed - NikStays",

        `
        <h2>Your booking is confirmed 🎉</h2>

        <h3>
        ${booking.listing.title}
        </h3>


        <p>
        Location:
        ${booking.listing.location}
        </p>


        <p>
        Check-in:
        ${booking.checkIn.toDateString()}
        </p>


        <p>
        Check-out:
        ${booking.checkOut.toDateString()}
        </p>


        <p>
        Guests:
        ${booking.guests}
        </p>


        <h3>
        Total Paid:
        ₹${booking.totalPrice}
        </h3>


        <p>
        Thank you for booking with NikStays ❤️
        </p>
        `

    );



    req.flash(
        "success",
        "Payment successful 🎉 Booking confirmed"
    );


    // Go to trips page

    res.redirect("/trips");


}));





// ================= PAYMENT SUCCESS PAGE =================

router.get("/:bookingId/success", wrapAsync(async(req,res)=>{


    if(!req.isAuthenticated()){

        req.flash(
            "error",
            "Please login first"
        );

        return res.redirect("/login");

    }


    const booking = await Booking.findById(
        req.params.bookingId
    )
    .populate("listing");



    if(!booking){

        req.flash(
            "error",
            "Booking not found"
        );

        return res.redirect("/listings");

    }



    res.render(
        "payments/success",
        {
            booking
        }
    );


}));


module.exports = router;