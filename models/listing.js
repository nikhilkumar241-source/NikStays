const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Note: You don't strictly need to require("./review") here unless you are setting up 
// a post-delete middleware later on, but keeping it won't break anything.
const Review = require("./review.js"); 

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      // FIX 1: Provide a fallback if 'v' itself is undefined or null, preventing crashes
      default: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157",
      set: (v) => v === "" ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157" : v,
    },
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review", // Ensure this matches exactly with mongoose.model("Review", ...) in review.js
    },
  ],
  owner:{
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// FIX 2 (Crucial for later): Handling Deletion (Mongoose Middleware)
// If a listing is deleted, its associated reviews should also be deleted from the database.
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;