const express = require("express");
const router = express.Router();

const Booking = require("../models/booking");
const Listing = require("../models/listing");

const wrapAsync = require("../utils/wrapAsync");


// ================= OWNER BOOKINGS =================

router.get(
"/bookings",
wrapAsync(async(req,res)=>{


    if(!req.isAuthenticated()){

        req.flash(
            "error",
            "Please login first"
        );

        return res.redirect("/login");

    }



    const listings = await Listing.find({
        owner:req.user._id
    });



    const listingIds = listings.map(
        listing => listing._id
    );



    const bookings = await Booking.find({

        listing:{
            $in:listingIds
        }

    })
    .populate("listing")
    .populate("user");



    res.render(
        "owner/bookings",
        {
            bookings
        }
    );


})
);



module.exports = router;