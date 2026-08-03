const express = require("express");
const router = express.Router();

const Booking = require("../models/booking");
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");


// ================= CREATE BOOKING =================
// ================= CREATE BOOKING =================

router.post("/:listingId", wrapAsync(async (req, res) => {


    if (!req.isAuthenticated()) {

        return res.status(401).json({

            success:false,

            error:"Please login first"

        });

    }



    const listing = await Listing.findById(
        req.params.listingId
    );



    if (!listing) {

        return res.status(404).json({

            success:false,

            error:"Listing not found"

        });

    }



    // Convert guests
    const guests = Number(
        String(req.body.guests)
        .replace(/\D/g,"")
    ) || 1;



    const checkIn = new Date(
        req.body.checkIn
    );


    const checkOut = new Date(
        req.body.checkOut
    );



    const nights =
    Math.ceil(
        (checkOut - checkIn) /
        (1000*60*60*24)
    );



    if(nights <= 0){

        return res.status(400).json({

            success:false,

            error:"Invalid dates"

        });

    }



    // Room price + fees
    const totalPrice =
    (Number(listing.price) * nights)
    + 500
    + 350;



    const booking = new Booking({


        listing:listing._id,


        user:req.user._id,


        checkIn,


        checkOut,


        guests,


        totalPrice,


        status:"confirmed"


    });



    await booking.save();



    return res.json({

        success:true,

        bookingId:booking._id

    });



}));

// ================= CANCEL BOOKING =================

router.delete("/:bookingId", wrapAsync(async (req, res) => {


    if (!req.isAuthenticated()) {

        req.flash(
            "error",
            "Please login first"
        );

        return res.redirect("/login");

    }



    const booking = await Booking.findById(
        req.params.bookingId
    );



    if (!booking) {

        req.flash(
            "error",
            "Booking not found"
        );

        return res.redirect("/trips");

    }



    if (!booking.user.equals(req.user._id)) {

        req.flash(
            "error",
            "You cannot cancel this booking"
        );

        return res.redirect("/trips");

    }



    await Booking.findByIdAndDelete(
        req.params.bookingId
    );



    req.flash(
        "success",
        "Booking cancelled successfully"
    );


    res.redirect("/trips");


}));




// ================= DOWNLOAD INVOICE =================

const PDFDocument = require("pdfkit");



router.get(
    "/:bookingId/invoice",
    wrapAsync(async (req, res) => {


        if (!req.isAuthenticated()) {

            req.flash(
                "error",
                "Please login first"
            );

            return res.redirect("/login");

        }



        const booking = await Booking.findById(
            req.params.bookingId
        )
        .populate("listing")
        .populate("user");



        if (!booking) {

            req.flash(
                "error",
                "Booking not found"
            );

            return res.redirect("/trips");

        }




        const doc = new PDFDocument();



        res.setHeader(
            "Content-Type",
            "application/pdf"
        );


        res.setHeader(
            "Content-Disposition",
            `attachment; filename=NiksStays-Invoice-${booking._id}.pdf`
        );



        doc.pipe(res);



        doc.fontSize(25)
        .text(
            "NiksStays Invoice",
            {
                align: "center"
            }
        );



        doc.moveDown();



        doc.fontSize(14)
        .text(
            `Booking ID: ${booking._id}`
        );


        doc.text(
            `Guest: ${booking.user.username}`
        );


        doc.text(
            `Property: ${booking.listing.title}`
        );


        doc.text(
            `Location: ${booking.listing.location}, ${booking.listing.country}`
        );



        doc.moveDown();



        doc.text(
            `Check-in: ${booking.checkIn.toDateString()}`
        );


        doc.text(
            `Check-out: ${booking.checkOut.toDateString()}`
        );


        doc.text(
            `Guests: ${booking.guests}`
        );



        doc.moveDown();



        doc.fontSize(18)
        .text(
            `Total Paid: ₹${booking.totalPrice}`
        );



        doc.moveDown();



        doc.fontSize(12)
        .text(
            "Thank you for choosing NiksStays ❤️"
        );



        doc.end();


    })
);


// ================= UPDATE BOOKING STATUS =================


router.patch("/:bookingId/status", wrapAsync(async(req,res)=>{


    if(!req.isAuthenticated()){

        req.flash(
            "error",
            "Please login first"
        );

        return res.redirect("/login");

    }



    const booking = await Booking.findById(
        req.params.bookingId
    );


    if(!booking){

        req.flash(
            "error",
            "Booking not found"
        );

        return res.redirect("/trips");

    }



    booking.status = req.body.status;


    await booking.save();



    req.flash(
        "success",
        "Booking status updated"
    );


    res.redirect("/trips");


}));


// ================= EXPORT =================

module.exports = router;