const express = require('express');
const router = express.Router();

const {loginUser, registerUser, logoutUser, profileUser} = require('../controllers/userControls');

router.get("/", function(req,res){
    res.render("home");
});

router.get("/register", function(req,res){
    res.render("register");
});

router.post("/registerUser", registerUser);

router.get("/login", function(req,res){
    res.render("login");
});

router.post("/loginuser", loginUser);

router.get("/logout", logoutUser);

module.exports = router;