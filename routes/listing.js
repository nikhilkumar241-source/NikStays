const express = require("express");

const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");

const {
    isLoggedIn,
    isOwner,
    validateListing
} = require("../middleware.js");

const listingController =
    require("../controllers/listing.js");

const multer = require("multer");

const { storage } =
    require("../cloudConfig.js");

const upload =
    multer({ storage });


// ======================================================
// ALL LISTINGS
// ======================================================

router
    .route("/")

    .get(
        wrapAsync(listingController.index)
    )

    .post(
        isLoggedIn,

        upload.array(
            "listing[images]",
            10
        ),

        validateListing,

        wrapAsync(
            listingController.createListing
        )
    );


// ======================================================
// NEW LISTING
// ======================================================

router.get(
    "/new",
    isLoggedIn,
    listingController.renderNewForm
);


// ======================================================
// SEARCH
// ======================================================

router.get(
    "/search",
    wrapAsync(
        listingController.searchListings
    )
);


// ======================================================
// PAYMENT
// ======================================================

router.get(
    "/:id/payment",

    isLoggedIn,

    wrapAsync(
        listingController.renderPaymentPage
    )
);


// ======================================================
// SHOW / UPDATE / DELETE
// ======================================================

router
    .route("/:id")

    .get(
        wrapAsync(
            listingController.showListing
        )
    )

    .put(
        isLoggedIn,

        isOwner,

        upload.array(
            "listing[images]",
            10
        ),

        validateListing,

        wrapAsync(
            listingController.updateListing
        )
    )

    .delete(
        isLoggedIn,

        isOwner,

        wrapAsync(
            listingController.destroyListing
        )
    );


// ======================================================
// EDIT
// ======================================================

router.get(
    "/:id/edit",

    isLoggedIn,

    isOwner,

    wrapAsync(
        listingController.renderEditForm
    )
);


module.exports = router;