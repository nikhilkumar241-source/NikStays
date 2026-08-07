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

    let bookings = await Booking.find({
      user: req.user._id
    })
      .populate("listing")
      .sort({ createdAt: -1 });

    // Remove bookings whose listing has been deleted
    bookings = bookings.filter(booking => booking.listing);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingBookings = bookings.filter(
      booking =>
        booking.status !== "cancelled" &&
        booking.checkOut >= today
    );

    const pastBookings = bookings.filter(
      booking =>
        booking.status === "cancelled" ||
        booking.checkOut < today
    );

    res.render("bookings/trips", {
      upcomingBookings,
      pastBookings
    });

  })
);

module.exports = router;