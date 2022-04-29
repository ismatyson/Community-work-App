const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config');


const isiboSchema=new mongoose.Schema({
    user: {
        type: new mongoose.Schema({
            NationalId: {
                type: Number,
                unique: true,
                maxlength:16,
            },
            name: {
                type: String,
                required: true,
                min:5,
                max:50
            },
            phone: {
                type: String,
                required: true,
                min:10,
                max:15
            },
        }),
        required: true
    },
    name: {
        type: String,
        required: true,
        max:20
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
    PeopleJoined: {
        type: Number,
        required: true,
        default: 0
    },
    NumberofPeople: {
        type: Number,
        required: true,
    }
});

const Isibo=mongoose.model('isibo',isiboSchema);

exports.Isibo = Isibo;