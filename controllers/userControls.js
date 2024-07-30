const {userModel, userValidationSchema} = require('../models/user');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');


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


        res.redirect(`/home/${username}`);
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

        res.redirect(`/home/${user.username}`);
            

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

    res.send("Loged out successfull");
}
module.exports.userHome = async function(req,res){
    res.render("userHome", {user:req.user});
}

