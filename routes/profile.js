const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Listing = require("../models/listing");
const Booking = require("../models/booking");

const wrapAsync = require("../utils/wrapAsync");

router.get(
    "/",
    wrapAsync(async (req, res) => {

        if (!req.isAuthenticated()) {
            req.flash("error", "Please login first");
            return res.redirect("/login");
        }

        const user = await User.findById(req.user._id);

        const listings = await Listing.countDocuments({
            owner: req.user._id
        });

        const bookings = await Booking.countDocuments({
            user: req.user._id
        });

        res.render("profile/index", {
            user,
            listings,
            bookings
        });

    })
);

module.exports = router;