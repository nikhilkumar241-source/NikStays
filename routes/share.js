const express = require("express");
const router = express.Router();

const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");


router.get("/:listingId", wrapAsync(async (req, res) => {

    let listing = await Listing.findById(req.params.listingId);

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    let shareLink = `${req.protocol}://${req.get("host")}/listings/${listing._id}`;

    res.json({
        message: "Share link created",
        link: shareLink
    });

}));


module.exports = router;