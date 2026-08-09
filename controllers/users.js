const User = require("../models/user.js");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

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
            email,
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
            confirmPassword,
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
// Render Forgot Password Page
// ==============================
module.exports.renderForgotPasswordForm = (req, res) => {
    res.render("users/forgotPassword.ejs");
};

// ==============================
// Forgot Password
// ==============================
module.exports.forgotPassword = async (req, res) => {

    try {

        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            req.flash("error", "No account found with that email.");
            return res.redirect("/forgot-password");
        }

        const token = crypto.randomBytes(32).toString("hex");

        user.resetToken = token;
        user.resetTokenExpiry = Date.now() + (60 * 60 * 1000); // 1 hour

        await user.save();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const resetLink = `${req.protocol}://${req.get("host")}/reset-password/${token}`;

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "NikStays Password Reset",
            html: `
                <h2>Password Reset</h2>

                <p>Hello ${user.username},</p>

                <p>You requested to reset your NikStays password.</p>

                <p>
                    <a href="${resetLink}">
                        Click here to reset your password
                    </a>
                </p>

                <p>This link will expire in 1 hour.</p>

                <p>If you didn't request this, simply ignore this email.</p>
            `,
        });

        req.flash(
            "success",
            "Password reset link has been sent to your email."
        );

        res.redirect("/login");

    } catch (err) {

        console.error(err);

        req.flash(
            "error",
            "Unable to send password reset email."
        );

        res.redirect("/forgot-password");
    }
};


// ==============================
// Render Reset Password Page
// ==============================
module.exports.renderResetPasswordForm = async (req, res) => {

    try {

        const user = await User.findOne({
            resetToken: req.params.token,
            resetTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            req.flash("error", "Reset link is invalid or has expired.");
            return res.redirect("/forgot-password");
        }

        res.render("users/resetPassword.ejs", {
            token: req.params.token,
        });

    } catch (err) {

        console.error(err);

        req.flash("error", "Something went wrong.");

        res.redirect("/forgot-password");
    }
};

// ==============================
// Reset Password
// ==============================
module.exports.resetPassword = async (req, res) => {

    try {

        const { password } = req.body;

        const user = await User.findOne({
            resetToken: req.params.token,
            resetTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            req.flash("error", "Reset link is invalid or has expired.");
            return res.redirect("/forgot-password");
        }

        await user.setPassword(password);

        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;

        await user.save();

        req.flash("success", "Password reset successfully! Please login.");

        res.redirect("/login");

    } catch (err) {

        console.error(err);

        req.flash("error", "Unable to reset password.");

        res.redirect("/forgot-password");
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