const express = require('express');
const router = express.Router();

const {home, loginUser, registerUser, logoutUser, profileUser} = require('../controllers/userControls');
router.get("/", function(req,res){
    res.render("home");
});
router.get("/register", function(req,res){
    res.render("register");
});
router.post("/registerUser", registerUser);
router.get("/logout", function(req,res){
    res.render("home");
});
router.get("/profile", function(req,res){
    res.render("home");
});
module.exports = router;