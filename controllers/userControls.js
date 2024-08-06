const {userModel, userValidationSchema} = require('../models/user');
const expenseModel = require('../models/expense')
const budgetModel = require('../models/budget');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const { default: mongoose } = require('mongoose');


module.exports.registerUser = async function (req, res) {
    let { username, name, email, password } = req.body;
    try {
         //Validating user data with joi
         let err = userValidationSchema({username, name, password, email});
         if(err){
             return res.send(err.message);
         }

        //Checking is user is already registered or not
        let user = await userModel.findOne({ email: email });
        if (user) {
            return res.send("You are already registered. Please log in");
        }

       
        //Encrypting Password
        let salt = await bcrypt.genSalt();
        let encryptedPassword = await bcrypt.hash(password, salt);

        //User creation
        user = await userModel.create({
            username,
            email,
            name,
            password: encryptedPassword,
        });

        //Token generation
        let token = generateToken(user.email);

        //Setting cookie into browser
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });


        res.redirect(`/home/`);
    } catch (error) {
        res.send(error.message);
    }
}

module.exports.loginUser = async function (req, res) {
    let { email, password } = req.body;
    try {
        //finding user in database
        let user = await userModel.findOne({ email });

        //checking user exists or not
        if (!user) {
            return res.send("User not found! Register first.");
        }

        //if user exists then validating his password
        let validateUser = await bcrypt.compare(password, user.password);
        if (validateUser) {
            //Token generation
            let token = generateToken(user.email);

            //Setting cookie into browser
            res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                maxAge: 30 * 24 * 60 * 60 * 1000,
            });

        res.redirect(`/home/`);
            

        } else {
            res.send("username or password is incorrect");
        }
    } catch (error) {
        res.send(error.message);
    }
}

module.exports.logoutUser = async function(req,res){
    //Deleting cookie
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
    });

    res.redirect('/login');
}
module.exports.userHome = async function(req,res){

    //Getting all expenses amount and summing it from expense model
    const totalExpense = await expenseModel.aggregate([
        {$match : {user : new mongoose.Types.ObjectId(req.user._id)}},
        {$group : {_id:null, total:{$sum: "$amount"}}}
    ])
    const categoryExpense = await expenseModel.aggregate([
        {$match : {user : new mongoose.Types.ObjectId(req.user._id)}},
        {$group : {_id:"$category", total:{$sum: "$amount"}}}
    ])
   

    //Getting budget related information from budget model
    const budget = await budgetModel.aggregate([
        {$match: {user: new mongoose.Types.ObjectId(req.user._id)}}
    ]);

    let monthlyBudget;
    let yearlyBudget;
    if(budget.length != 0){
         monthlyBudget = budget[0].monthlyBudget;
         yearlyBudget = budget[0].yearlyBudget;
    }else{
         monthlyBudget = 0;
         yearlyBudget = 0;
    }
    res.render("dashboard", {
        user:req.user,
        totalExpense: totalExpense.length > 0 ? totalExpense[0].total : 0  ,
        monthlyBudget,
        yearlyBudget,
        categoryExpense,
        
    });
  
}

