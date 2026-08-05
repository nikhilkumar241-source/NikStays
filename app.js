require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressErrors.js");

const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user.js");
const Listing = require("./models/listing.js");


// ================= ROUTERS =================

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const bookingRouter = require("./routes/booking");
const wishlistRouter = require("./routes/wishlist");
const shareRouter = require("./routes/share");
const paymentRouter = require("./routes/payment");
const tripsRouter = require("./routes/trips");
const ownerRouter = require("./routes/owner");
const dashboardRouter = require("./routes/dashboard");
const profileRouter = require("./routes/profile");



const dbUrl = process.env.ATLASDB_URL;


// ================= VIEW ENGINE =================


app.set("view engine","ejs");

app.set(
    "views",
    path.join(__dirname,"views")
);

app.engine(
    "ejs",
    ejsMate
);



// ================= MIDDLEWARE =================


app.use(
    express.urlencoded({
        extended:true
    })
);


app.use(
    express.json()
);


app.use(
    methodOverride("_method")
);


app.use(
    express.static(
        path.join(__dirname,"public")
    )
);



// ================= SESSION =================


const store = MongoStore.create({

    mongoUrl:dbUrl,

    crypto:{
        secret:process.env.SECRET
    },

    touchAfter:24*3600

});



store.on(
    "error",
    (err)=>{
        console.log(
            "Session Store Error:",
            err
        );
    }
);



const sessionOptions={


    store,


    secret:process.env.SECRET,


    resave:false,


    saveUninitialized:false,


    cookie:{


        expires:new Date(
            Date.now()+7*24*60*60*1000
        ),


        maxAge:
        7*24*60*60*1000,


        httpOnly:true

    }

};



app.use(
    session(sessionOptions)
);



app.use(
    flash()
);



// ================= PASSPORT =================


app.use(
    passport.initialize()
);


app.use(
    passport.session()
);



passport.use(
    new LocalStrategy(
        User.authenticate()
    )
);



passport.serializeUser(
    User.serializeUser()
);



passport.deserializeUser(
    User.deserializeUser()
);



// ================= GLOBAL VARIABLES =================


app.use(
async(req,res,next)=>{


    res.locals.success =
    req.flash("success");


    res.locals.error =
    req.flash("error");


    res.locals.currUser =
    req.user;



    // Host check

    res.locals.isHost=false;



    if(req.user){


        const listings =
        await Listing.find({

            owner:req.user._id

        });



        if(listings.length>0){

            res.locals.isHost=true;

        }


    }



    next();


});



// ================= HOME =================


app.get(
"/",
(req,res)=>{

    res.redirect("/listings");

});




// // ================= ROUTES =================


app.use(
"/listings",
listingRouter
);



app.use(
"/listings/:id/reviews",
reviewRouter
);



app.use(
"/",
userRouter
);



app.use(
"/booking",
bookingRouter
);



app.use(
"/wishlist",
wishlistRouter
);



app.use(
"/share",
shareRouter
);



app.use(
"/payment",
paymentRouter
);



app.use(
"/trips",
tripsRouter
);



app.use(
"/owner",
ownerRouter
);

app.use(
"/dashboard",
dashboardRouter
);


app.use("/profile", profileRouter);


// ================= STATIC PAGES =================


app.get(
"/privacy",
(req,res)=>{

    res.render(
        "pages/privacy"
    );

});



app.get(
"/terms",
(req,res)=>{

    res.render(
        "pages/terms"
    );

});


app.get("/favicon.ico", (req, res) => {
    res.status(204).end();
});

// ================= 404 =================


app.use(
(req,res,next)=>{


    console.log(
        "404 URL:",
        req.originalUrl
    );


    next(
        new ExpressError(
            404,
            "Page Not Found"
        )
    );


});




// ================= ERROR =================


app.use(
(err,req,res,next)=>{


    console.log(
        "ERROR DETAILS:"
    );


    console.log(err);



    res.status(500)
    .send(err.stack);


});




// ================= SERVER =================


async function startServer(){


try{


    console.log(
        "Connecting to Database..."
    );



    await mongoose.connect(
        dbUrl
    );



    console.log(
        "Connected to DB successfully!"
    );



    app.listen(
        process.env.PORT || 8080,
        ()=>{


            console.log(
            `Server is listening on port ${
            process.env.PORT || 8080
            }`
            );


        }
    );


}
catch(err){


    console.error(
        "Database Connection Error:",
        err
    );


}



}



startServer();