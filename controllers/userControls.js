const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');


module.exports.registerUser = async function (req, res) {
    let { username, name, password, email } = req.body;
    try {
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
        let token = generateToken({ email });

        //Setting cookie into browser
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });
        res.render("user-home");
    } catch (error) {
        res.send("Something went wrong try again");
    }
}