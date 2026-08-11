require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
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

// ======================================================
// APP
// ======================================================

const app = express();

// ======================================================
// DATABASE
// ======================================================

const dbUrl = process.env.ATLASDB_URL;

if (!dbUrl) {
    console.error("ERROR: ATLASDB_URL is missing from .env");
    process.exit(1);
}

// ======================================================
// ROUTERS
// ======================================================

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const bookingRouter = require("./routes/booking.js");
const wishlistRouter = require("./routes/wishlist.js");
const shareRouter = require("./routes/share.js");
const paymentRouter = require("./routes/payment.js");
const tripsRouter = require("./routes/trips.js");
const ownerRouter = require("./routes/owner.js");
const dashboardRouter = require("./routes/dashboard.js");
const profileRouter = require("./routes/profile.js");

// ======================================================
// VIEW ENGINE
// ======================================================

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);

app.engine("ejs", ejsMate);

// ======================================================
// BASIC MIDDLEWARE
// ======================================================

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use(
    methodOverride("_method")
);

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);

// ======================================================
// SESSION STORE
// ======================================================

const store = MongoStore.create({
    mongoUrl: dbUrl,

    crypto: {
        secret: process.env.SECRET
    },

    touchAfter: 24 * 60 * 60
});

store.on("error", (err) => {
    console.error(
        "Session Store Error:",
        err
    );
});

// ======================================================
// SESSION
// ======================================================

app.use(
    session({
        store,

        secret: process.env.SECRET,

        resave: false,

        saveUninitialized: false,

        cookie: {
            maxAge:
                7 * 24 * 60 * 60 * 1000,

            httpOnly: true,

            secure: false
        }
    })
);

// ======================================================
// FLASH
// ======================================================

app.use(flash());

// ======================================================
// PASSPORT
// ======================================================

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

// ======================================================
// GLOBAL VARIABLES
// ======================================================

app.use(
    async (req, res, next) => {

        try {

            // Flash messages
            res.locals.success =
                req.flash("success");

            res.locals.error =
                req.flash("error");

            // Current logged-in user
            res.locals.currUser =
                req.user || null;

            // Default host status
            res.locals.isHost = false;

            // Check whether current user owns listings
            if (req.user) {

                const listings =
                    await Listing.find({
                        owner: req.user._id
                    }).select("_id");

                res.locals.isHost =
                    listings.length > 0;
            }

            next();

        } catch (err) {

            next(err);

        }

    }
);

// ======================================================
// HOME
// ======================================================

app.get(
    "/",
    (req, res) => {

        res.redirect("/listings");

    }
);

// ======================================================
// LISTING ROUTES
// ======================================================

// Main listing routes
app.use(
    "/listings",
    listingRouter
);

// ======================================================
// NEW LISTING COMPATIBILITY ROUTE
// ======================================================
//
// Your actual route is:
// /listings/new
//
// This additional route also allows:
// /new-listing
//
// This fixes the 404 when an old button/link uses
// /new-listing.
//

app.get(
    "/new-listing",
    (req, res) => {

        res.redirect("/listings/new");

    }
);

// ======================================================
// REVIEW ROUTES
// ======================================================

app.use(
    "/listings/:id/reviews",
    reviewRouter
);

// ======================================================
// USER ROUTES
// ======================================================

app.use(
    "/",
    userRouter
);

// ======================================================
// BOOKING ROUTES
// ======================================================

app.use(
    "/booking",
    bookingRouter
);

// ======================================================
// WISHLIST ROUTES
// ======================================================

app.use(
    "/wishlist",
    wishlistRouter
);

// ======================================================
// SHARE ROUTES
// ======================================================

app.use(
    "/share",
    shareRouter
);

// ======================================================
// PAYMENT ROUTES
// ======================================================

app.use(
    "/payment",
    paymentRouter
);

// ======================================================
// TRIPS ROUTES
// ======================================================

app.use(
    "/trips",
    tripsRouter
);

// ======================================================
// OWNER ROUTES
// ======================================================

app.use(
    "/owner",
    ownerRouter
);

// ======================================================
// DASHBOARD ROUTES
// ======================================================

app.use(
    "/dashboard",
    dashboardRouter
);

// ======================================================
// PROFILE ROUTES
// ======================================================

app.use(
    "/profile",
    profileRouter
);

// ======================================================
// STATIC PAGES
// ======================================================

// Privacy
app.get(
    "/privacy",
    (req, res) => {

        res.render(
            "pages/privacy"
        );

    }
);

// Terms
app.get(
    "/terms",
    (req, res) => {

        res.render(
            "pages/terms"
        );

    }
);

// Contact
app.get(
    "/contact",
    (req, res) => {

        res.render(
            "pages/contact"
        );

    }
);

// ======================================================
// HELP CENTER
// ======================================================

app.get(
    [
        "/help",
        "/help-center",
        "/helpcenter"
    ],
    (req, res) => {

        res.render(
            "pages/helps"
        );

    }
);

// ======================================================
// FAVICON
// ======================================================

app.get(
    "/favicon.ico",
    (req, res) => {

        res.status(204).end();

    }
);

// ======================================================
// 404 HANDLER
// ======================================================

app.use(
    (req, res, next) => {

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

    }
);

// ======================================================
// ERROR HANDLER
// ======================================================

app.use(
    (err, req, res, next) => {

        console.error(
            "ERROR DETAILS:"
        );

        console.error(err);

        // Prevent "headers already sent"
        if (res.headersSent) {
            return next(err);
        }

        const statusCode =
            err.statusCode || 500;

        const message =
            err.message ||
            "Something went wrong";

        res.status(statusCode);

        res.send(
            `<h1>${statusCode} - ${message}</h1>`
        );

    }
);

// ======================================================
// START SERVER
// ======================================================

async function startServer() {

    try {

        console.log(
            "Connecting to Database..."
        );

        await mongoose.connect(
            dbUrl
        );

        console.log(
            "Connected to DB successfully!"
        );

        const PORT =
            process.env.PORT || 8080;

        app.listen(
            PORT,
            () => {

                console.log(
                    `Server is listening on port ${PORT}`
                );

                console.log(
                    `Open: http://localhost:${PORT}`
                );

            }
        );

    } catch (err) {

        console.error(
            "Database Connection Error:",
            err
        );

        process.exit(1);

    }

}

startServer();