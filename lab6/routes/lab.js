var express = require('express');
var router = express.Router();
const Recording = require('../models/recording');

router.get('/status', function(req, res){
    let zip = req.query.zip;
    //console.log(zip)
    let re = /\d{5}/;
    if (!re.test(zip)){
        var errormsg = {"error" : "a zip code is required."}
        res.status(400).json(errormsg);
        return;
    } 
    /*if(Recording.count({zip:req.query.zip}, {limit:1}) == 0){
        var errormsg = {"error" : "Zip does not exist in the database."}
        res.status(400).json(errormsg);
        return;
    }*/
    Recording.find({zip:req.query.zip}, function(err, docs){
        //console.log(docs)
        if (err){
            var errormsg = {"error" : err}
            res.status(404).json(errormsg);
        }
        else if (docs.length == 0){
            var errormsg = {"error" : "Zip does not exist in the database."}
            res.status(400).json(errormsg);
        }
         else{
            //res.status(201).json(docs);
            let sum = 0
            for (let i=0; i < docs.length; i++){
                sum += docs[i].airQuality
            }
            let average = (sum/docs.length).toFixed(2)
            res.status(201).json(average);
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