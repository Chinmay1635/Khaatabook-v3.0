const {userModel} = require('../models/user');
const budgetModel = require('../models/budget');

module.exports.getBudget = async function(req,res){
    try {
        let user = await userModel.findOne({email:req.user.email}).select("-password").populate("budget");
    res.send(user);
    } catch (error) {
        res.send(error.messeage);
    }
}
module.exports.setBudget = async function(req,res){
    let {monthlyBudget, yearlyBudget} = req.body;
    try {
        let user = await userModel.findOne({email:req.user.email}).select("-password");
    let budget = await budgetModel.create({
        monthlyBudget,
        yearlyBudget,
        user: user._id,
    });
    user.budget = budget._id;
    await user.save(); 
    res.send({user,budget});
    } catch (error) {
        res.send(error.messeage);
    }
}