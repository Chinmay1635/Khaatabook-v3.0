const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();


const db = require('./config/mongoose');
const userModel = require('./models/user');

app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', async function(req,res){
    let user = await userModel.create({
        name:"test"
    });

    res.send(user)
});

app.listen(process.env.PORT || 3000);