const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config');


const userSchema=new mongoose.Schema({
    NationalId: {
        type: Number,
        unique: true,
        maxlength:16,
    },
    name: {
        type: String,
        required: true,
        min:5,
        max:20
    },
    email: {
        type: String,
        unique: true,
        min:5,
        max:30
    },
    province: {
        type: String,
        required: true,
        min:5,
        max:20
    },
    district: {
        type: String,
        required: true,
        min:5,
        max:20
    },
    village: {
        type: String,
        required: true,
        min:5,
        max:20
    },
    phone: {
        type: String,
        required: true,
        max:10
    },
    password: {
        type: String,
        required: true,
        min:5,
        max:30
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, config.get('jwtPrivateKey'));
    return token;
}

const User=mongoose.model('users',userSchema);

exports.User = User;