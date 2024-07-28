const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    expenses: []
});

function userValidationSchema(data){
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required().trim().messages({
            'string.min': 'Username must be at least 3 characters long',
            'string.max': 'Username cannot exceed 30 characters',
            'any.required': 'Username is required'
        }),
        name: Joi.string().required().trim().messages({
            'any.required': 'Name is required'
        }),
        email: Joi.string().email().required().trim().lowercase().messages({
            'string.email': 'Please fill a valid email address',
            'any.required': 'Email is required'
        }),
        password: Joi.string().min(8).required().messages({
            'string.min': 'Password must be at least 8 characters long',
            'any.required': 'Password is required'
        }),
        expenses: Joi.array().items(Joi.object({
            title: Joi.string(),
            amount: Joi.number(),
            date: Joi.date()
        })).optional()
    });

   let {error} = schema.validate(data);
   return error;
}


module.exports.userModel = mongoose.model("user", userSchema);
module.exports.userValidationSchema = userValidationSchema;