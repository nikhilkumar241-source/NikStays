const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

const { saveRedirectUrl, isLoggedIn } = require("../middleware.js");

const userController = require("../controllers/users.js");


// Signup

router
.route("/signup")
.get(userController.renderSignupForm)
.post(
    wrapAsync(userController.signup)
);


// Login

router
.route("/login")
.get(userController.renderLoginForm)
.post(
    saveRedirectUrl,
    passport.authenticate(
        "local",
        {
            failureRedirect: "/login",
            failureFlash: true
        }
    ),
    userController.login
);


// Change Password

router
.route("/change-password")
.get(
    isLoggedIn,
    userController.renderChangePasswordForm
)
.post(
    isLoggedIn,
    wrapAsync(userController.changePassword)
);


// Forgot Password

router
.route("/forgot-password")
.get(userController.renderForgotPasswordForm)
.post(
    wrapAsync(userController.forgotPassword)
);

// Reset Password

router
.route("/reset-password/:token")
.get(
    wrapAsync(userController.renderResetPasswordForm)
)
.post(
    wrapAsync(userController.resetPassword)
);


// Logout

router.get(
    "/logout",
    userController.logout
);


module.exports = router;