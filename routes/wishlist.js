const express = require("express");
const router = express.Router();

const Wishlist = require("../models/wishlist");
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");


// ================= VIEW WISHLIST =================

router.get("/", wrapAsync(async(req,res)=>{


    if(!req.isAuthenticated()){

        req.flash(
            "error",
            "Please login first"
        );

        return res.redirect("/login");

    }



    let wishlist = await Wishlist.find({
        user:req.user._id
    })
    .populate("listing");



    res.render(
        "listings/wishlist",
        {
            wishlist
        }
    );


}));




// ================= ADD TO WISHLIST =================

router.post("/:listingId", wrapAsync(async(req,res)=>{


    if(!req.isAuthenticated()){

        req.flash(
            "error",
            "Please login first"
        );

        return res.redirect("/login");

    }



    let listing = await Listing.findById(
        req.params.listingId
    );



    if(!listing){

        req.flash(
            "error",
            "Listing not found"
        );

        return res.redirect("/listings");

    }



    let existing = await Wishlist.findOne({

        user:req.user._id,

        listing:listing._id

    });



    if(existing){

        req.flash(
            "error",
            "Already saved ❤️"
        );

        return res.redirect(
            `/listings/${listing._id}`
        );

    }



    let wishlist = new Wishlist({

        user:req.user._id,

        listing:listing._id

    });



    await wishlist.save();



    req.flash(
        "success",
        "Added to wishlist ❤️"
    );


    res.redirect(
        `/listings/${listing._id}`
    );


}));





// ================= REMOVE FROM WISHLIST =================

router.delete("/:listingId", wrapAsync(async(req,res)=>{


    if(!req.isAuthenticated()){

        return res.redirect("/login");

    }



    await Wishlist.findOneAndDelete({

        user:req.user._id,

        listing:req.params.listingId

    });



    req.flash(
        "success",
        "Removed from wishlist"
    );



    res.redirect("/wishlist");


}));



module.exports = router;