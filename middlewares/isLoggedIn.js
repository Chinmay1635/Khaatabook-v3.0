const jwt = require('jsonwebtoken');
const {userModel} = require('../models/user');

module.exports.isLoggedIn = async (req,res,next)=>{
    if(req.cookie.token){
        try {
            const data = jwt.verify(req.cookie.token, process.env.JWT_KEY);
            req.user = await userModel.findOne({email:data.email}).select("-password");
            next();
        } catch (error) {
            res.send(error.messeage)
        }
    }
}