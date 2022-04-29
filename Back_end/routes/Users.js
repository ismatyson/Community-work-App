const authorization = require('../middleware/nodejs/Authorization');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const _=require('lodash');
const {User,validateUser} = require('../models/user');
const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/me',async(req,res)=>{
    let user = await User.findOne({ phone: req.body.phone }).select('-password');
    res.send(user);
});

router.post('/',async(req,res)=>{
   console.log(req.body.userData)
   let user = await User.findOne({ NationalId: req.body.userData.NationalId });
   if(user) return res.status(400).send('User Already Exists!');

   user =new User(_.pick(req.body.userData, ['NationalId','name','email','password','province','district','village','phone','isAdmin']));
   const salt=await bcrypt.genSalt(10);
   user.password=await bcrypt.hash(user.password,salt);
   await user.save();

   const token = user.generateAuthToken();  
   const userPack = {
    userInfo: user,
    userToken: token,
    expiresIn: new Date(new Date().getTime()+86409000).toUTCString()
   }
   res.send(userPack);
});

router.get('/',async(req,res)=>{
    const users = await User
       .find()
       .sort('-name')
       .select('NationalId name province district village phone isAdmin'); 
    res.send(users);
});

router.get('/:id',async(req,res)=>{
    const user = await User
       .findOne({ NationalId: req.params.id })
       .select('NationalId name province phone isAdmin'); 

    if(!user) return res.status(404).send('User not found !');
    res.send(user);
});

module.exports = router;