const express = require("express");
const router = express.Router();

const Booking = require("../models/booking");
const wrapAsync = require("../utils/wrapAsync");

const { isLoggedIn } = require("../middleware");


// Trips Page
router.get(
    "/",
    isLoggedIn,
    wrapAsync(async (req, res) => {

        const bookings = await Booking.find({
            user: req.user._id
        })
        .populate("listing")
        .sort({
            createdAt: -1
        });


        const upcomingBookings = bookings.filter(
            booking =>
                booking.status !== "cancelled" &&
                new Date(booking.checkOut) >= new Date()
        );


        const pastBookings = bookings.filter(
            booking =>
                booking.status === "cancelled" ||
                new Date(booking.checkOut) < new Date()
        );


        res.render(
            "bookings/trips.ejs",
            {
                upcomingBookings,
                pastBookings
            }
        );

    })
);


module.exports = router;