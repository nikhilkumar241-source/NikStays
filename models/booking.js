const bookingSchema = new mongoose.Schema({

    listing:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Listing",
        required:true
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    checkIn:{
        type:Date,
        required:true
    },

    checkOut:{
        type:Date,
        required:true
    },

    guests:{
        type:Number,
        required:true
    },

    totalPrice:{
        type:Number,
        required:true
    },

    status:{
        type:String,
        enum:[
            "pending",
            "confirmed",
            "completed",
            "cancelled"
        ],
        default:"pending"
    }

},
{
    timestamps:true
});