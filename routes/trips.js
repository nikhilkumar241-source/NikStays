const express=require("express");
const router=express.Router();

const Booking=require("../models/booking");


router.get("/",async(req,res)=>{


if(!req.isAuthenticated()){

req.flash(
"error",
"Please login first"
);

return res.redirect("/login");

}


const bookings = await Booking.find({
    user:req.user._id
})
.populate("listing");



res.render(
"bookings/trips",
{
    bookings
}
);


});


module.exports=router;