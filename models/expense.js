const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
        enum: ['Food', 'Travel', 'Grocery', 'Entertainment', 'Healthcare', 'Other'],
    },
    tags: {
        type: [String],
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model("expense", expenseSchema);