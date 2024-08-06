const {userModel, userValidationSchema} = require('../models/user');
const expenseModel = require('../models/expense');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const { default: mongoose } = require('mongoose');

module.exports.createExpense = async function(req,res){
    let {description, amount, tags, category} = req.body;
    try {
        let user = await userModel.findOne({email: req.user.email}).select("-password");
    let newExpense = await expenseModel.create({
        user: user._id,
        description,
        tags,
        amount,
        category,

    });

    user.expenses.push(newExpense._id);
    await user.save();

    res.redirect('/home');
    } catch (error) {
        res.send(error.messeage);
    }
}