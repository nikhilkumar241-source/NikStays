const User = require("../models/user");
const Listing = require("../models/listing");
const Wishlist = require("../models/wishlist");

const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const mapToken = process.env.MAP_TOKEN;

const geocodingClient = mbxGeocoding({
    accessToken: mapToken,
});


// ======================================================
// INDEX - SHOW ALL LISTINGS
// ======================================================

module.exports.index = async (req, res, next) => {

    try {

        const { search, category } = req.query;

        let filter = {};

        // ================= SEARCH =================

        if (search && search.trim() !== "") {

            filter.$or = [

                {
                    title: {
                        $regex: search,
                        $options: "i"
                    }
                },

                {
                    location: {
                        $regex: search,
                        $options: "i"
                    }
                },

                {
                    country: {
                        $regex: search,
                        $options: "i"
                    }
                }

            ];

        }


        // ================= CATEGORY =================

        if (category) {

            filter.category = category;

        }


        // ================= GET LISTINGS =================

        const allListings = await Listing.find(filter)
            .populate("owner");


        // ==================================================
        // WISHLIST
        // ==================================================

        let wishlist = [];

        if (req.user) {

            const wishlistDocuments = await Wishlist.find({
                user: req.user._id
            });

            wishlist = wishlistDocuments.map(item =>
                item.listing.toString()
            );

        }


        // ================= RENDER =================

        res.render("listings/index.ejs", {

            allListings,

            wishlist,

            search,

            category

        });

    } catch (err) {

        next(err);

    }

};


// ======================================================
// SEARCH API
// ======================================================

module.exports.searchListings = async (req, res, next) => {

    try {

        const { search } = req.query;

        let listings = [];


        if (search && search.trim() !== "") {

            listings = await Listing.find({

                $or: [

                    {
                        title: {
                            $regex: search,
                            $options: "i"
                        }
                    },

                    {
                        location: {
                            $regex: search,
                            $options: "i"
                        }
                    },

                    {
                        country: {
                            $regex: search,
                            $options: "i"
                        }
                    }

                ]

            });

        }


        res.json(listings);

    } catch (err) {

        next(err);

    }

};


// ======================================================
// NEW LISTING FORM
// ======================================================

module.exports.renderNewForm = (req, res) => {

    res.render("listings/new.ejs");

};


// ======================================================
// SHOW SINGLE LISTING
// ======================================================

module.exports.showListing = async (req, res, next) => {

    try {

        const { id } = req.params;

        const listing = await Listing.findById(id)

            .populate({
                path: "reviews",
                populate: {
                    path: "author"
                }
            })

            .populate("owner");


        if (!listing) {

            req.flash(
                "error",
                "Listing you requested does not exist!"
            );

            return res.redirect("/listings");

        }


        // ==================================================
        // CHECK WISHLIST STATUS
        // ==================================================

        let isWishlisted = false;

        if (req.user) {

            const existingWishlist =
                await Wishlist.findOne({

                    user: req.user._id,

                    listing: listing._id

                });

            isWishlisted = !!existingWishlist;

        }


        res.render("listings/show.ejs", {

            listing,

            currUser: req.user,

            mapToken: process.env.MAP_TOKEN,

            isWishlisted

        });

    } catch (err) {

        next(err);

    }

};


// ======================================================
// CREATE NEW LISTING
// ======================================================

module.exports.createListing = async (req, res, next) => {

    try {

        const response = await geocodingClient
            .forwardGeocode({

                query:
                    `${req.body.listing.location}, ${req.body.listing.country}`,

                limit: 1

            })
            .send();


        const newListing =
            new Listing(req.body.listing);


        // ================= OWNER =================

        newListing.owner = req.user._id;


        // ================= IMAGES =================

        if (req.files && req.files.length > 0) {

            newListing.images =
                req.files.map(file => ({

                    url: file.path,

                    filename: file.filename

                }));


            // Backward compatibility

            newListing.image =
                newListing.images[0];

        }


        // ================= MAPBOX =================

        if (
            response.body.features &&
            response.body.features.length > 0
        ) {

            newListing.geometry =
                response.body.features[0].geometry;

        } else {

            newListing.geometry = {

                type: "Point",

                coordinates: [
                    77.2090,
                    28.6139
                ]

            };

        }


        await newListing.save();


        req.flash(
            "success",
            "New Listing Created Successfully!"
        );


        res.redirect(
            `/listings/${newListing._id}`
        );

    } catch (err) {

        next(err);

    }

};


// ======================================================
// EDIT FORM
// ======================================================

module.exports.renderEditForm = async (req, res, next) => {

    try {

        const { id } = req.params;

        const listing =
            await Listing.findById(id);


        if (!listing) {

            req.flash(
                "error",
                "Listing not found!"
            );

            return res.redirect("/listings");

        }


        res.render(
            "listings/edit.ejs",
            {
                listing
            }
        );

    } catch (err) {

        next(err);

    }

};


// ======================================================
// UPDATE LISTING
// ======================================================

module.exports.updateListing = async (req, res, next) => {

    try {

        const { id } = req.params;

        const listing =
            await Listing.findById(id);


        if (!listing) {

            req.flash(
                "error",
                "Listing not found!"
            );

            return res.redirect("/listings");

        }


        // ================= UPDATE FIELDS =================

        listing.title =
            req.body.listing.title;

        listing.description =
            req.body.listing.description;

        listing.price =
            req.body.listing.price;

        listing.location =
            req.body.listing.location;

        listing.country =
            req.body.listing.country;

        listing.category =
            req.body.listing.category;


        // ================= UPDATE LOCATION =================

        const response =
            await geocodingClient
                .forwardGeocode({

                    query:
                        `${listing.location}, ${listing.country}`,

                    limit: 1

                })
                .send();


        if (
            response.body.features &&
            response.body.features.length > 0
        ) {

            listing.geometry =
                response.body.features[0].geometry;

        }


        // ================= ADD IMAGES =================

        if (
            req.files &&
            req.files.length > 0
        ) {

            const newImages =
                req.files.map(file => ({

                    url: file.path,

                    filename: file.filename

                }));


            if (!listing.images) {

                listing.images = [];

            }


            listing.images.push(
                ...newImages
            );


            listing.image =
                listing.images[0];

        }


        await listing.save();


        req.flash(
            "success",
            "Listing Updated Successfully!"
        );


        res.redirect(
            `/listings/${listing._id}`
        );

    } catch (err) {

        next(err);

    }

};


// ======================================================
// DELETE LISTING
// ======================================================

module.exports.destroyListing = async (req, res, next) => {

    try {

        const { id } = req.params;


        const deletedListing =
            await Listing.findByIdAndDelete(id);


        if (!deletedListing) {

            req.flash(
                "error",
                "Listing not found!"
            );

            return res.redirect("/listings");

        }


        // ==================================================
        // REMOVE WISHLIST ENTRIES FOR THIS LISTING
        // ==================================================

        await Wishlist.deleteMany({
            listing: id
        });


        req.flash(
            "success",
            "Listing Deleted Successfully!"
        );


        res.redirect("/listings");

    } catch (err) {

        next(err);

    }

};


// ======================================================
// SAVE / UNSAVE LISTING
// ======================================================
//
// This endpoint is kept for compatibility with:
// POST /listings/:id/save
//
// It now uses the Wishlist model instead of User.wishlist.
//

module.exports.saveListing = async (req, res, next) => {

    try {

        const { id } = req.params;


        if (!req.user) {

            return res.status(401).json({

                success: false,

                message: "Please login first"

            });

        }


        const listing =
            await Listing.findById(id);


        if (!listing) {

            return res.status(404).json({

                success: false,

                message: "Listing not found"

            });

        }


        const existing =
            await Wishlist.findOne({

                user: req.user._id,

                listing: id

            });


        // ================= REMOVE =================

        if (existing) {

            await Wishlist.findByIdAndDelete(
                existing._id
            );


            return res.json({

                success: true,

                saved: false

            });

        }


        // ================= ADD =================

        await Wishlist.create({

            user: req.user._id,

            listing: id

        });


        return res.json({

            success: true,

            saved: true

        });

    } catch (err) {

        next(err);

    }

};


// ======================================================
// PAYMENT PAGE
// ======================================================

module.exports.renderPaymentPage = async (req, res, next) => {

    try {

        const { id } = req.params;


        const listing =
            await Listing.findById(id);


        if (!listing) {

            req.flash(
                "error",
                "Listing not found!"
            );

            return res.redirect("/listings");

        }


        res.render(
            "listings/payment.ejs",
            {
                listing
            }
        );

    } catch (err) {

        next(err);

    }

};