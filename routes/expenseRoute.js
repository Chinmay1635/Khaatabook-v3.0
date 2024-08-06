const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const { isLoggedIn } = require('../middlewares/isLoggedIn');
const {createExpense} = require('../controllers/expenseControls');

router.get("/expenses", function(req,res){
    res.render("expenses");
});

router.get("/:username/create-new", function(req,res){

    res.render('expenseCreate',);
})

router.post("/expenses", isLoggedIn, createExpense);


module.exports = router;