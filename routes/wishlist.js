const express = require("express");

const router = express.Router();

const Wishlist = require("../models/wishlist");

const Listing = require("../models/listing");

const wrapAsync = require("../utils/wrapAsync");


// ======================================================
// VIEW WISHLIST
// ======================================================

router.get(
    "/",
    wrapAsync(async (req, res) => {

        // ================= LOGIN CHECK =================

        if (!req.isAuthenticated()) {

            req.flash(
                "error",
                "Please login first"
            );

            return res.redirect("/login");

        }


        // ================= GET WISHLIST =================

        const wishlist =
            await Wishlist.find({
                user: req.user._id
            })
            .populate("listing");


        // ================= RENDER =================

        res.render(
            "listings/wishlist",
            {
                wishlist
            }
        );

    })
);


// ======================================================
// ADD / REMOVE WISHLIST
// ======================================================
//
// POST /wishlist/:listingId
//
// If listing is not saved -> save it
// If listing is already saved -> remove it
//
// This makes the heart button work as a toggle.
//

router.post(
    "/:listingId",
    wrapAsync(async (req, res) => {

        // ================= LOGIN CHECK =================

        if (!req.isAuthenticated()) {

            req.flash(
                "error",
                "Please login first"
            );

            return res.redirect("/login");

        }


        const { listingId } =
            req.params;


        // ================= FIND LISTING =================

        const listing =
            await Listing.findById(listingId);


        if (!listing) {

            req.flash(
                "error",
                "Listing not found"
            );

            return res.redirect("/listings");

        }


        // ================= CHECK EXISTING =================

        const existing =
            await Wishlist.findOne({

                user: req.user._id,

                listing: listing._id

            });


        // ==================================================
        // REMOVE
        // ==================================================

        if (existing) {

            await Wishlist.findByIdAndDelete(
                existing._id
            );


            req.flash(
                "success",
                "Removed from wishlist"
            );


            return res.redirect(
                `/listings/${listing._id}`
            );

        }


        // ==================================================
        // ADD
        // ==================================================

        await Wishlist.create({

            user: req.user._id,

            listing: listing._id

        });


        req.flash(
            "success",
            "Added to wishlist ❤️"
        );


        return res.redirect(
            `/listings/${listing._id}`
        );

    })
);


// ======================================================
// REMOVE FROM WISHLIST
// ======================================================
//
// DELETE /wishlist/:listingId
//

router.delete(
    "/:listingId",
    wrapAsync(async (req, res) => {

        if (!req.isAuthenticated()) {

            req.flash(
                "error",
                "Please login first"
            );

            return res.redirect("/login");

        }


        await Wishlist.findOneAndDelete({

            user: req.user._id,

            listing: req.params.listingId

        });


        req.flash(
            "success",
            "Removed from wishlist"
        );


        res.redirect("/wishlist");

    })
);


module.exports = router;