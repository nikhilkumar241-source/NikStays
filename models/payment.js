const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
{
    booking:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking"
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    listing:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Listing",
        required:true
    },

    transactionId:{
        type:String,
        required:true,
        unique:true
    },

    amount:{
        type:Number,
        required:true
    },

    paymentMethod:{
        type:String,
        enum:[
            "UPI",
            "Credit Card",
            "Debit Card",
            "Net Banking",
            "Wallet"
        ],
        required:true
    },

    status:{
        type:String,
        enum:[
            "SUCCESS",
            "FAILED",
            "PENDING"
        ],
        default:"SUCCESS"
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Payment",paymentSchema);