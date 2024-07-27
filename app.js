const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();


const db = require('./config/mongoose');
const userModel = require('./models/user');
const homeRoute = require('./routes/home');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', homeRoute);

app.listen(process.env.PORT || 3000);