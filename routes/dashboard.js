const express = require("express");
const router = express.Router();

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

        const listings = await Listing.find({
            owner: req.user._id
        });

        const listingIds = listings.map(listing => listing._id);

        const bookings = await Booking.find({
            listing: { $in: listingIds },
            status: "confirmed"
        })
        .populate("listing")
        .populate("user");

        const totalListings = listings.length;

        const totalBookings = bookings.length;

        const totalGuests = bookings.reduce(
            (sum, booking) => sum + booking.guests,
            0
        );

        const totalRevenue = bookings.reduce(
            (sum, booking) => sum + booking.totalPrice,
            0
        );

        const averageBookingValue =
    totalBookings > 0
        ? Math.round(totalRevenue / totalBookings)
        : 0;

const upcomingBookings = bookings.filter(
    booking => booking.checkIn >= new Date()
).length;

const recentBookings = bookings
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 5);

const mostBookedListing = (() => {
    const counts = {};

    bookings.forEach(booking => {
        const id = booking.listing._id.toString();

        counts[id] = (counts[id] || 0) + 1;
    });

    let topListing = null;
    let max = 0;

    listings.forEach(listing => {

        const total = counts[listing._id.toString()] || 0;

        if (total > max) {
            max = total;
            topListing = listing;
        }

    });

    return topListing;
})();

        res.render("dashboard/index", {
    listings,
    bookings,
    totalListings,
    totalBookings,
    totalGuests,
    totalRevenue,
    averageBookingValue,
    upcomingBookings,
    recentBookings,
    mostBookedListing
});

    })
);

module.exports = router;