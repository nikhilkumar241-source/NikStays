const Booking = require("../models/booking");
const Listing = require("../models/listing");
const User = require("../models/user");

// =======================================
// CREATE BOOKING
// =======================================

module.exports.createBooking = async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    const { checkIn, checkOut, guests } = req.body;

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    const nights = Math.ceil(
        (endDate - startDate) / (1000 * 60 * 60 * 24)
    );

    if (nights <= 0) {
        req.flash("error", "Invalid booking dates.");
        return res.redirect(`/listings/${id}`);
    }

    const totalPrice = nights * listing.price;

    const booking = new Booking({
        listing: listing._id,
        user: req.user._id,
        checkIn: startDate,
        checkOut: endDate,
        guests,
        totalPrice,
    });

    await booking.save();

    listing.bookings.push(booking._id);
    await listing.save();

    const user = await User.findById(req.user._id);
    user.bookings.push(booking._id);
    await user.save();

    req.flash("success", "Booking created successfully!");

    res.redirect("/bookings");
};

// =======================================
// MY BOOKINGS
// =======================================

module.exports.myBookings = async (req, res) => {

    const bookings = await Booking.find({
        user: req.user._id,
    })
        .populate("listing")
        .sort({ createdAt: -1 });

    res.render("bookings/index.ejs", {
        bookings,
    });

};

// =======================================
// CANCEL BOOKING
// =======================================

module.exports.cancelBooking = async (req, res) => {

    const { id } = req.params;

    const booking = await Booking.findById(id);

    if (!booking) {
        req.flash("error", "Booking not found.");
        return res.redirect("/bookings");
    }

    await Listing.findByIdAndUpdate(
        booking.listing,
        {
            $pull: {
                bookings: booking._id,
            },
        }
    );

    await User.findByIdAndUpdate(
        booking.user,
        {
            $pull: {
                bookings: booking._id,
            },
        }
    );

    await Booking.findByIdAndDelete(id);

    req.flash("success", "Booking cancelled successfully.");

    res.redirect("/bookings");

};