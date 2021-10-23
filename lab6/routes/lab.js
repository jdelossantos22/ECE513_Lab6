var express = require('express');
var router = express.Router();
const Recording = require('../models/recording');

router.get('/status', function(req, res){
    let zip = req.query.zip;
    console.log(zip)
    let re = /\d{5}/;
    if (!re.test(zip)){
        var errormsg = {"error" : "a zip code is required."}
        res.status(400).json(errormsg);
        return;
    } 
    Recording.find({zip:req.query.zip}, {$exists:true}, function(err, docs){
        if (err){
            var errormsg = {"error" : "Zip does not exist in the database."}
            res.status(400).json(errormsg);
         }
         else{
            res.status(201).json(docs);
         }
    });
});

router.post('/register', function(req,res){
    const newRecording = new Recording({
        zip:req.body.zip,
        airQuality: req.body.airQuality
    });
    newRecording.save(function(err, recording){
        if(err){
            var errormsg = {"error" : "zip and airQuality are required."}
            res.status(400).json(errormsg)
        }
        else{
            var msg = {"response" : "Data recorded."}
            res.status(201).json(msg);
        }
    });
});

module.exports = router;