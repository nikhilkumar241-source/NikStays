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


// ================= ROUTERS =================

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const bookingRouter = require("./routes/booking");
const wishlistRouter = require("./routes/wishlist");
const shareRouter = require("./routes/share");
const paymentRouter = require("./routes/payment");
const tripsRouter = require("./routes/trips");


const dbUrl = process.env.ATLASDB_URL;


// ================= VIEW ENGINE =================

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);


// ================= MIDDLEWARE =================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));


// ================= DATABASE SESSION =================

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});


store.on("error", (err) => {
  console.log("Session Store Error:", err);
});


const sessionOptions = {
  store,

  secret: process.env.SECRET,

  resave: false,

  saveUninitialized: false,

  cookie: {
    expires: new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ),

    maxAge: 7 * 24 * 60 * 60 * 1000,

    httpOnly: true,
  },
};


app.use(session(sessionOptions));

app.use(flash());


// ================= PASSPORT =================

app.use(passport.initialize());

app.use(passport.session());


passport.use(
  new LocalStrategy(User.authenticate())
);


passport.serializeUser(
  User.serializeUser()
);


passport.deserializeUser(
  User.deserializeUser()
);


// ================= GLOBAL VARIABLES =================

app.use((req, res, next) => {

  res.locals.success = req.flash("success");

  res.locals.error = req.flash("error");

  res.locals.currUser = req.user;

  next();

});


// ================= HOME =================

app.get("/", (req, res) => {

  res.redirect("/listings");

});


// ================= ROUTES =================

app.use("/listings", listingRouter);

app.use(
  "/listings/:id/reviews",
  reviewRouter
);

app.use("/", userRouter);


// Booking
app.use("/booking", bookingRouter);


// Wishlist
app.use("/wishlist", wishlistRouter);


// Share
app.use("/share", shareRouter);


// Payment
app.use("/payment", paymentRouter);


// Trips
app.use("/trips", tripsRouter);



// ================= 404 HANDLER =================

app.use((req, res, next) => {

    console.log("404 URL:", req.originalUrl);

    next(new ExpressError(404, "Page Not Found"));

});


// ================= ERROR HANDLER =================

app.use((err, req, res, next) => {

  console.log("ERROR DETAILS:");
  console.log(err);

  res.status(500).send(err.stack);

});



// ================= START SERVER =================


async function startServer() {

  try {

    console.log("Connecting to Database...");


    await mongoose.connect(dbUrl);


    console.log(
      "Connected to DB successfully!"
    );


    app.listen(
      process.env.PORT || 8080,
      () => {

        console.log(
          `Server is listening on port ${
            process.env.PORT || 8080
          }`
        );

      }
    );


  } catch(err) {

    console.error(
      "Database Connection Error:",
      err
    );

  }

}


startServer();