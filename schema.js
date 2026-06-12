const Joi = require('joi');
const joi = require('joi');

const listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        countary: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().allow("", null),
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: joi.number().required(),
        comment: Joi.string().required(),
    }).required()
});