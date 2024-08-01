const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    monthlyBudget: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
        
    },
    yearlyBudget: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
}, { timestamps: true });

module.exports = mongoose.model('budget', budgetSchema);