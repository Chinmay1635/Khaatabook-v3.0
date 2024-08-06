const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const {loginUser, registerUser, logoutUser, userHome} = require('../controllers/userControls');
const { isLoggedIn } = require('../middlewares/isLoggedIn');

router.get("/", function(req,res){
    res.render("home");
});

router.get("/signup", function(req,res){
    res.render("register");
});

router.post("/registerUser", registerUser);

router.get("/login", function(req,res){
    res.render("login");
});

router.post("/loginuser", loginUser);

router.get("/logout", logoutUser);

router.get("/home",isLoggedIn, userHome);

module.exports = router;