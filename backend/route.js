const express = require('express');
const router = express.Router();

const Doctor = require('./doctorSchema');

router.get('/doctors', (req, res, next)=>{
    Doctor.find((err, items)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(items);
        }
    })
})

router.post('/doctor', (req, res, next)=>{
    let newDoctor = new Doctor({
        doctorName: req.body.doctorName,
        doctorTimeStamp: req.body.doctorTimeStamp,
        doctorPrice: req.body.doctorPrice,
        doctorDone: req.body.doctorDone
    });
    newDoctor.save((err)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Items has been added successfully'});
        }
    });
});

router.put('/doctor/:id', (req, res, next)=>{
    Doctor.findOneAndUpdate(
        {_id: req.params.id},
        {
            $set:{
                doctorName: req.body.doctorName,
                doctorTimeStamp: req.body.doctorTimeStamp,
                doctorPrice: req.body.doctorPrice,
                doctorDone: req.body.doctorDone
        }},
        (err,result)=>{
            if(err){
                res.json(err);
            }
            else{
                // res.json(result);
                res.json({msg: 'updated successfully'});
            }
        }
    )
});

router.delete('/doctor/:id', (req, res, next)=>{
    Doctor.remove({
        _id: req.params.id
    }, (err, result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})
module.exports = router;
