const validateObjectId = require('../middleware/nodejs/validateObjectId');
const asyncMiddleware = require('../middleware/nodejs/async');
const admin = require('../middleware/nodejs/admin');
const authorization = require('../middleware/nodejs/Authorization');
const {Isibo} = require('../models/isibo');
const express=require('express');
const {User} = require('../models/user');
const router=express.Router();
const mongoose = require('mongoose');

router.use(express.json());

router.post('/',async(req,res)=>{
    console.log(req.body);
     if(req.body.name && req.body.province && req.body.district && req.body.village && req.body.NumberofPeople){
        let userInfo = await User.findOne({ NationalId: req.body.NationalId });
        if(!userInfo) return res.status(400).send('User not found!');

                const isibo = new Isibo({
                    user: userInfo,
                    name: req.body.name,
                    province: req.body.province,
                    district: req.body.district,
                    village: req.body.village,
                    NumberofPeople: req.body.NumberofPeople
                });
                const user = await User.findOneAndUpdate({ NationalId: req.body.NationalId },{
                    $set: {
                    isibo: isibo,
                    }
                },{new: true});

                const result=await isibo.save();

                const userUpdate = {
                    user: user,
                    isibo: result
                }
                res.send(userUpdate);
     }else {
         return console.log('Invalid data!');
     }  

});



router.get('/',async(req,res) =>{
    
      const isibos= await Isibo
          .find()
          .sort({name: 1})
      res.send(isibos);
    
});

router.get('/Myisibo/:id',async(req,res) =>{
        
    
    const isibos= await Isibo.find()

    const myIsibo=[]
    isibos.forEach(isibo => {
        if(isibo._id.toString() == req.params.id){
           myIsibo.push(isibo)
        }
    });

   res.send(myIsibo);
 
});

router.put('/:id',async(req,res) =>{

    let userInfo = await User.findOne({ NationalId: req.body.user.NationalId });
    if(!userInfo) return res.status(400).send('User not found!');

    const phouse = await Prayerhouse.update({_id:req.params.id},{
        $set: {
            house: req.body.house,
            user: userInfo,
            seats: req.body.seats,
            thumbnail: req.body.thumbnail,
            attendants: req.body.attendants,
            location: req.body.location,
            sessions: req.body.sessions 
        }
    });
        
   if(!phouse) return res.status(404).send('Prayer house not found !');
   res.send(phouse);
 
});

router.delete('/:id',async(req,res) =>{ 

       const phouse= await Prayerhouse.findByIdAndRemove(req.params.id);

       const sessions= await Session.find()

       let sessionId
       sessions.forEach(session =>{
          if(session.phouse._id.toString() === req.params.id.toString()){
              sessionId = session._id
          }
       })

       const session= await Session.findByIdAndRemove(sessionId)

    //    if(!session) return res.status(404).send('Session not found for '+ phouse.house);
       if(!phouse) return res.status(404).send('Prayer House not found !');
       res.send(phouse);
      
});

module.exports = router;