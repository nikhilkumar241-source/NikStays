const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(), 
        price: Joi.number().required().min(0), // Added .min(0) to prevent negative prices
        
        // Robust Image Object Validation
        image: Joi.object({
            filename: Joi.string().allow("", null),
            url: Joi.string().allow("", null)
        }).empty("").allow(null) // If image is sent as "", Joi converts it to undefined safely
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5), // Restricts rating between 1 and 5
        comment: Joi.string().required(),
    }).required()
});