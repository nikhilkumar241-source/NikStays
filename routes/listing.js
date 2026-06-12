const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressErrors.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");



const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMSg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMSg);
  } else {
    next();
  }
};


// ==================== LISTING ROUTES ====================

// Index Route
router.get("/", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

// New Route
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route
router.get("/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;

  const listing = await Listing.findById(id).populate("reviews");

  if (!listing) {
    throw new ExpressError(404, "Listing not found");
  }

  res.render("listings/show.ejs", { listing });
}));

// Create Route
router.post("/", 
  validateListing, 
  wrapAsync(async (req, res, next) => {
    let result = listingSchema.validate(req.body);
    if (result.error) {
      throw new ExpressError(400, result.error);
    }
    const newListing = new Listing(req.body.listing);
    
    newListing.image = {
      url: req.body.listing.image,
      filename: "listingimage"
    };

    await newListing.save();
    res.redirect("/listings");
}));

// Edit Route
router.get("/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

// Update Route
router.put("/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);

  listing.set(req.body.listing);

  listing.image = {
    url: req.body.listing.image,
    filename: "listingimage"
  };

  await listing.save();
  res.redirect(`/listings/${id}`);
}));

// Delete Route
router.delete(
  "/:id",
  wrapAsync(async (req, res)=>{
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);

    res.redirect("/listings");
  })
);

module.exports = router;