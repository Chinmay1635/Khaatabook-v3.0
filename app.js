const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();


const db = require('./config/mongoose');
const {userModel, userValidationSchema} = require('./models/user');
const homeRoute = require('./routes/home');
const expenseRoute = require('./routes/expenseRoute');
const budgetRoute = require('./routes/budgetRoute');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use((req, res, next) => {
//     console.log(`Request URL: ${req.originalUrl}`);
//     next();
// });

app.use('/', homeRoute);

app.use('/', expenseRoute);

app.use('/', budgetRoute);

app.listen(process.env.PORT || 3000);