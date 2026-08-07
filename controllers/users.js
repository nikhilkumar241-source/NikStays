const User = require("../models/user.js");

// ==============================
// Render Signup Page
// ==============================
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

// ==============================
// Signup
// ==============================
module.exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const newUser = new User({
            username,
            email
        });

        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }

            req.flash("success", "Welcome to NikStays!");
            res.redirect("/listings");
        });

    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

// ==============================
// Render Login Page
// ==============================
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

// ==============================
// Login
// ==============================
module.exports.login = async (req, res) => {

    req.flash("success", "Welcome back to NikStays!");

    const redirectUrl = res.locals.redirectUrl || "/listings";

    res.redirect(redirectUrl);
};

// ==============================
// Render Change Password Page
// ==============================
module.exports.renderChangePasswordForm = (req, res) => {
    res.render("users/changePassword.ejs");
};

// ==============================
// Change Password
// ==============================
module.exports.changePassword = async (req, res) => {

    try {

        const {
            currentPassword,
            newPassword,
            confirmPassword
        } = req.body;

        if (newPassword !== confirmPassword) {
            req.flash("error", "New passwords do not match.");
            return res.redirect("/change-password");
        }

        const user = await User.findById(req.user._id);

        await user.changePassword(currentPassword, newPassword);

        req.flash("success", "Password changed successfully!");

        res.redirect("/profile");

    } catch (err) {

        req.flash("error", "Current password is incorrect.");

        res.redirect("/change-password");
    }
};

// ==============================
// Logout
// ==============================
module.exports.logout = (req, res, next) => {

    req.logout((err) => {

        if (err) {
            return next(err);
        }

        req.flash("success", "You are logged out!");

        res.redirect("/listings");

    });

};