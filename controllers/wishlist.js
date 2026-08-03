// controllers/wishlist.js

const User = require("../models/user");

module.exports.index = async (req, res) => {

    const user = await User.findById(req.user._id)
        .populate("wishlist");

    res.render("wishlist/index", {
        listings: user.wishlist,
    });

};