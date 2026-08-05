const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) =>{
    res.render("users/signup.ejs");
};


module.exports.signup = async(req, res)=>{
    try{

        let{username, email, password} = req.body;
    const newUser = new User({ email, username});
    const registerUser= await User.register(newUser,password);
    console.log(registerUser);
    req.login(registerUser, (err)=>{
        if(err){
            return next(err);

        }
        req.flash("success", "Welcole to Wanderlust!")
        res.redirect("/listings");

    });

    } catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
  };

module.exports.renderLoginForm = (req, res)=>{
    res.render("users/login.ejs");
}

module.exports.login = async(req, res)=>{
    req.flash("success","Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    //if (redirectUrl.includes("${id}") || redirectUrl.includes("undefined")) {redirectUrl = "/listings";}
    res.redirect(redirectUrl);
};


// Render Change Password Page
module.exports.renderChangePasswordForm = (req, res) => {
    res.render("users/changePassword.ejs");
};

// Change Password
module.exports.changePassword = async (req, res) => {
    try {

        const { currentPassword, newPassword, confirmPassword } = req.body;

        if (newPassword !== confirmPassword) {
            req.flash("error", "New passwords do not match.");
            return res.redirect("/change-password");
        }

        const user = await User.findById(req.user._id);

        await user.changePassword(currentPassword, newPassword);

        req.flash("success", "Password changed successfully.");
        res.redirect("/listings");

    } catch (err) {

        req.flash("error", "Current password is incorrect.");
        res.redirect("/change-password");

    }
};


module.exports.logout = (req, res)=>{
    req.logout((err)=>{
        if(err){
            next(err);

        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings");

    })
}