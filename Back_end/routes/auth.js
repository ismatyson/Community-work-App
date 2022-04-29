const Joi = require('joi');
const bcrypt = require('bcrypt');
const _=require('lodash');
const {User} = require('../models/user');
const express = require('express');
const router = express.Router();

router.use(express.json());

let usery

router.post('/',async(req,res)=>{
//    const {error} = validate(req.body);
//    if(error) return res.status(400).send(error.details[0].message);
   console.log(req.body)
   let user = await User.findOne({ phone: req.body.phone });
   if(!user) return res.status(400).send('Invalid User or Password.');

   const validPassword =await bcrypt.compare(req.body.password, user.password);
   if(!validPassword) return res.status(400).send('Invalid User or Password.');

   usery = user 

   const token = user.generateAuthToken();
   
   const userPack = {
       email: user.email,
       name: user.name,
       nationalId: user.NationalId,
       token: token,
       expiresIn: new Date(new Date().getTime()+86409000).toUTCString()
   }

   res.send(userPack);
});

router.get('/me',async(req,res)=>{
    const user = {
        name: usery.name,
        email: usery.email,
        NationalId: usery.NationalId,
        district: usery.district,
        village: usery.village,
        isAdmin: usery.isAdmin
    }
    res.send(user);
});

function validate(req){
    const Schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    }

    return Joi.validate(req,Schema);   
}

module.exports = router;