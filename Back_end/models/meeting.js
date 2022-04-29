const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config');


const meetingSchema=new mongoose.Schema({
    isibo: {
        type: new mongoose.Schema({
            _id: {
                type: String,
                required: true,
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
                max:20
            },
        }),
        required: true
    },
    event: {
        type: String,
        required: true,
        max:20
    },
    place: {
        type: String,
        required: true,
        max:100
    },
    date: {
        type: String,
        required: true,
        max:20
    },
    start: {
        type: String,
        required: true,
        max:20
    },
    end: {
        type: String,
        required: true,
        max:20
    },
    brief: {
        type: String,
        required: true,
        default: 'Meeting Remarks...',
        max:300
    },
    invitees: {
        type: Array,
        required: true,
    },
    attendants: {
        type: Array
    },
    arrivals: {
        type: Array
    },
    missed: {
        type: Array
    },
    purpose: {
        type: String,
        required: true,
    },
    tools: {
        type: Array,
        required: true,
    },
    status: {
        type: String,
        default: 'onGoing'
    },
    
});

const Meeting=mongoose.model('meeting',meetingSchema);

exports.Meeting = Meeting;