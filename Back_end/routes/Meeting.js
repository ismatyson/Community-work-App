const validateObjectId = require('../middleware/nodejs/validateObjectId');
const asyncMiddleware = require('../middleware/nodejs/async');
const admin = require('../middleware/nodejs/admin');
const authorization = require('../middleware/nodejs/Authorization');
const {Meeting} = require('../models/meeting');
const express=require('express');
const {Isibo} = require('../models/isibo');
const {User} = require('../models/user');
const router=express.Router();
const mongoose = require('mongoose');

router.use(express.json());

router.post('/',async(req,res)=>{
        let isiboInfo = await Isibo.findById(req.body.isiboId);
        if(!isiboInfo) return res.status(400).send('Isibo not found!');    
        const meeting = new Meeting({
            isibo: isiboInfo,
            event: req.body.post.event,
            place: req.body.post.place,
            date: req.body.post.date,
            start: req.body.post.start,
            end: req.body.post.end,
            brief: req.body.post.brief,
            invitees: req.body.post.invitees,
            purpose: req.body.post.purpose,
            tools: req.body.post.tools,
        });

        try{
                const result=await meeting.save();
                res.send(result);
        }
        catch(ex){
            for(field in ex.errors)
            console.log(ex.errors[field].message);
        }
    
});

router.post('/attendance',async(req,res)=>{
    const arrivals = req.body
    const users = await User
    .find()
    .select('NationalId name Gender isibo phone isAdmin charges attended missed');

    async function UpdateUser(attendedPoints,userId){
       await User.findOneAndUpdate({ NationalId: userId },{
            $set: {
                attended: attendedPoints,
            }
          },{new: true});
    }

    async function UpdateMeetingAttendants(participants) {
        const newAttendants = []
        let remarks = ''
        if(arrivals.Remarks){
            remarks = arrivals.Remarks
        }else{
            remarks = 'No Remarks drawn from this meeting'
        }
       await Meeting.findOneAndUpdate({ _id: arrivals.meetingId },{
        $set: {
            attendants: newAttendants,
            arrivals: participants,
            status: 'Ended',
            brief: remarks,
        }
       },{new: true});
    }

    if(arrivals.attended.length){

        const attendants = []

        arrivals.attended.forEach(attendee => {
            users.forEach(user => {
        
            if(attendee.toString() === user._id.toString()){
                const newAttended = user.attended + 1
                UpdateUser(newAttended,user.NationalId)
                attendants.push(user) 
            }
            });
        });

        UpdateMeetingAttendants(attendants)
    }

    //Missed citizen territory

    async function MissedUser(missedPoints,userId,newCharges){
        await User.findOneAndUpdate({ NationalId: userId },{
             $set: {
                 missed: missedPoints,
                 charges: newCharges
             }
           },{new: true});
     }
 
     async function updateMissedAttendants(participants) {
         const newAttendants = []
         let remarks = ''
         if(arrivals.Remarks){
            remarks = arrivals.Remarks
         }else{
            remarks = 'No Remarks drawn from this meeting'
         }
        await Meeting.findOneAndUpdate({ _id: arrivals.meetingId },{
         $set: {
             attendants: newAttendants,
             missed: participants,
             status: 'Ended',
             brief: remarks,
         }
        },{new: true});
     }
     
    if(arrivals.missed.length){
        const missedAttendants = []

        arrivals.missed.forEach(missedAttendee => {
            users.forEach(user => {
        
            if(missedAttendee.toString() === user._id.toString()){
                const newMissed = user.missed + 1
                const newCharges = user.charges + 5000
                MissedUser(newMissed,user.NationalId,newCharges)
                missedAttendants.push(user) 
            }
            });
        });
        updateMissedAttendants(missedAttendants)
    }   

});

router.put('/joinMeeting',async(req,res)=>{

  const meeting= await Meeting.findById(req.body.meetingId)
  if(!meeting) return res.status(404).send('Meeting not found !');

  const newAttendants = meeting.attendants
  newAttendants.push(req.body.user)
  console.log(newAttendants);

  const newMeeting = await Meeting.findOneAndUpdate({ _id: req.body.meetingId },{
    $set: {
        attendants: newAttendants,
    }
    },{new: true});
        
    if(!newMeeting) return res.status(404).send('Meeting not found !');
    res.send(newMeeting);
});

router.get('/',async(req,res) =>{
    
      const meetings= await Meeting
          .find()
          .sort({name: 1})
      res.send(meetings);
    
});

router.get('/:id',async(req,res) =>{
        
    const meeting= await Meeting
        .findById(req.params.id)
        
   if(!meeting) return res.status(404).send('Meeting not found !');
   res.send(meeting);
 
});

router.get('/meetups/:id',async(req,res) =>{

    const user = await User.findOne({ NationalId: req.params.id })

    const meetings= await Meeting
          .find()
          .sort({name: 1})

          const myMeetups= []

          meetings.forEach(meeting => {
              if(meeting.isibo._id === user.isibo._id){
                 myMeetups.push(meeting)
              }
          });
        
   res.send(myMeetups);
 
});

router.put('/',async(req,res) =>{
    const meeting = await Meeting.findOneAndUpdate({ _id: req.body._id },{
        $set: {
            event: req.body.event,
            place: req.body.place,
            date: req.body.date,
            start: req.body.start,
            end: req.body.end,
            brief: req.body.brief,
            purpose: req.body.purpose,
            invitees: req.body.invitees,
            tools: req.body.tools 
        }
    },{new: true});
        
   if(!meeting) return res.status(404).send('Meeting not found !');
   res.send(meeting);
 
});

router.delete('/:id',async(req,res) =>{ 

       const meeting= await Meeting.findByIdAndRemove(req.params.id);

       if(!meeting) return res.status(404).send('Meeting not found !');
       res.send(meeting);
      
});

module.exports = router;