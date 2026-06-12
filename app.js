const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressErrors.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");

const listings = require("./routes/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"; 

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Middleware & View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Root Route
app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMSg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMSg);
  } else {
    next();
  }
};

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMSg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMSg);
  } else {
    next();
  }
};

// ==================== LISTING ROUTES ====================

// Index Route
app.get("/listings", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

// New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route
app.get("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;

  const listing = await Listing.findById(id).populate("reviews");

  if (!listing) {
    throw new ExpressError(404, "Listing not found");
  }

  res.render("listings/show.ejs", { listing });
}));

// Create Route
app.post("/listings", 
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
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

// Update Route
app.put("/listings/:id", wrapAsync(async (req, res) => {
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
app.delete(
  "/listings/:id/reviews/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });

    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
  })
);




app.use("/listings", listings);


// ==================== REVIEWS ROUTES ====================

// Post Review Route
// FIX: Added wrapAsync wrapper to safely handle async errors and prevent 404 falling through
app.post("/listings/:id/reviews", validateReview, wrapAsync(async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  
  if (!listing) {
    throw new ExpressError(404, "Listing not found");
  }

  let newReview = new Review(req.body.review);

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  
  console.log("new review saved!");
  
  // Refactor: Instead of plain text res.send, redirect them back to the show page to see it live!
  res.redirect(`/listings/${listing._id}`);
}));


//delete reviews route

app.delete("/listings/:id/reviews/:reviewId",
  wrapAsync(async (req, res)=>{
    let { id, reviewId} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);

    res.redirect(`/listings/${id}`);

  })
);
// ==================== ERROR HANDLING ====================

// Fallback Route for Missing/404 URLs
// FIX: Corrected wildcard syntax from "*any" to "*"
// ==================== ERROR HANDLING ====================
// ==================== ERROR HANDLING ====================

// Fallback Route for Missing/404 URLs
// FIX: Using a JavaScript Regex literal (.*) instead of a string to bypass Express v5 path-to-regexp limits
app.all(/.* /, (req, res, next) => {
  next(new ExpressError(404, "Page not Found!"));
});

// Universal Error Handling Middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});