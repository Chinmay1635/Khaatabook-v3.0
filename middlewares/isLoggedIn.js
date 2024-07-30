const jwt = require('jsonwebtoken');
const {userModel} = require('../models/user');

module.exports.isLoggedIn = async (req,res,next)=>{
    if(req.cookies.token){
        try {
            const data = jwt.verify(req.cookies.token, process.env.JWT_KEY);
            req.user = await userModel.findOne({email:data}).select("-password");
            console.log(req.user)
            next();
        } catch (error) {
            res.send(error.messeage)
        }
    }else{
        res.send("You are not autherised");
    }
}