const express = require("express");
const router = express.Router();

const Listing = require("../models/listing");
const Booking = require("../models/booking");
const User = require("../models/user");

const isAdmin = require("../middleware/isAdmin");



router.get(
"/",
isAdmin,
async(req,res)=>{


    const listings =
    await Listing.find({});


    const bookings =
    await Booking.find({})
    .populate("listing")
    .populate("user");


    const users =
    await User.find({});



    res.render(
        "admin/dashboard",
        {
            listings,
            bookings,
            users
        }
    );


});


router.delete("/listing/:id", isAdmin, async(req,res)=>{


    await Listing.findByIdAndDelete(
        req.params.id
    );


    req.flash(
        "success",
        "Listing deleted successfully"
    );


    res.redirect("/admin");


}); 


module.exports = router;