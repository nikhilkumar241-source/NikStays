const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Handle both CommonJS and ESM exports
const passportLocalMongooseModule = require("passport-local-mongoose");
const passportLocalMongoose =
    passportLocalMongooseModule.default || passportLocalMongooseModule;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        wishlist: [
            {
                type: Schema.Types.ObjectId,
                ref: "Listing",
            },
        ],

        bookings: [
            {
                type: Schema.Types.ObjectId,
                ref: "Booking",
            },
        ],

        resetToken: {
            type: String,
            default: null,
        },

        resetTokenExpiry: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);