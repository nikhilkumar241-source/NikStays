require("dotenv").config();

const cloudinary = require("cloudinary").v2;

// ======================================================
// CLOUDINARY CONFIGURATION
// ======================================================

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// ======================================================
// CHECK CONFIGURATION
// ======================================================

console.log("Cloudinary configuration:");

console.log(
    "Cloud Name:",
    process.env.CLOUD_NAME ? "OK" : "MISSING"
);

console.log(
    "Cloud API Key:",
    process.env.CLOUD_API_KEY ? "OK" : "MISSING"
);

console.log(
    "Cloud API Secret:",
    process.env.CLOUD_API_SECRET ? "OK" : "MISSING"
);

// ======================================================
// EXPORT
// ======================================================

module.exports = {
    cloudinary,
};