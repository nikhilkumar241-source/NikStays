const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js"); 

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
  url: String,
  filename: String,
},

category: {
    type: String,
    required: true,
},

images: [
  {
    url: String,
    filename: String,
  },
],

  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review", // Ensure this matches exactly with mongoose.model("Review", ...) in review.js
    },
  ],

    bookings: [
      {
          type: Schema.Types.ObjectId,
          ref: "Booking",
      },
  ],
  owner:{
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
  type: {
    type: String,
    enum: ["Point"],
    default: "Point",
  },
  coordinates: {
    type: [Number],
    default: [0, 0],
  },
  
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