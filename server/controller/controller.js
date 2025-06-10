var Participentsdb= require('../model/model');
var Katzdb= require('../model/modelF');
var Bdb= require('../model/modelB');
var Cdb= require('../model/modelC');
var Ddb= require('../model/modelD');
var Edb= require('../model/modelE');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "אנא אשלם את הפרטים החסרים"});
        return;
    }

    // new user
    const participent = new Participentsdb({
        //fName: req.body.fName,
        name: req.body.name,
        PhoneNumber: req.body.PhoneNumber,
        email: req.body.email,
        numOfF: req.body.numOfF,
        numOfM: req.body.numOfM,
        status: req.body.status,
        notes: req.body.notes
    })

    // save user in the database
    participent
        .save(participent)
        .then(data => {
            //res.send(data)
            res.redirect('/a')
        })
        .catch(err =>{
            //res.alert(err.message)
            //res.status(500).send('אחד מהפרטים שגוי');
            res.redirect('/error-page');
            
        });

}
// create and save new user for freiman
exports.createF = (req,res)=>{
    // validate request
    
    if(!req.body){
        res.status(400).send({ message : "אנא אשלם את הפרטים החסרים"});
        return;
    }
   
    req.body.email=req.body.email.trim();

    // new user
    const freiman = new Katzdb({
        name: req.body.name,
        email: req.body.email,
        numOfF: req.body.numOfF,
        numOfM: req.body.numOfM,
        status: req.body.status,
        notes: req.body.notes
    })

    // save user in the database
    freiman
        .save(freiman)
        .then(data => {
            //res.send(data)
            res.redirect('/')
        })
        .catch(err =>{
            res.redirect('/error-page-freiman');
        });

}

// create and save new user for third user
exports.createB = (req,res)=>{
    // validate request
    
    if(!req.body){
        res.status(400).send({ message : "אנא אשלם את הפרטים החסרים"});
        return;
    }
   
    //req.body.email=req.body.email.trim();

    // new user
    const b = new Bdb({
        name: req.body.name,
        PhoneNumber: req.body.PhoneNumber,
        //email: req.body.email,
        numOfF: req.body.numOfF,
        numOfM: req.body.numOfM,
        numOfC: req.body.numOfC,
        status: req.body.status,
        notes: req.body.notes
    })

    // save user in the database
    b
        .save(b)
        .then(data => {
            //res.send(data)
            res.redirect('/b')
        })
        .catch(err =>{
            res.redirect('/error-page-b');
        });

}
exports.createC = (req,res)=>{
    // validate request
    
    if(!req.body){
        res.status(400).send({ message : "אנא אשלם את הפרטים החסרים"});
        return;
    }
   
    //req.body.email=req.body.email.trim();

    // new user
    const c = new Cdb({
        fName: req.body.fName,
        lName: req.body.lName,
        PhoneNumber: req.body.PhoneNumber,
        //email: req.body.email,
        numOfF: req.body.numOfF,
        numOfM: req.body.numOfM,
        status: req.body.status,
        notes: req.body.notes
    })

    // save user in the database
    c
        .save(c)
        .then(data => {
            //res.send(data)
            res.redirect('/c')
        })
        .catch(err =>{
            res.redirect('/error-page-c');
        });

}
exports.createD = (req,res)=>{
    // validate request
    
    if(!req.body){
        res.status(400).send({ message : "אנא אשלם את הפרטים החסרים"});
        return;
    }
   
    //req.body.email=req.body.email.trim();

    // new user
    const d = new Ddb({
        fName: req.body.fName,
        lName: req.body.lName,
        PhoneNumber: req.body.PhoneNumber,
        //email: req.body.email,
        numOfF: req.body.numOfF,
        numOfM: req.body.numOfM,
        status: req.body.status,
        notes: req.body.notes
    })

    // save user in the database
    d
        .save(d)
        .then(data => {
            //res.send(data)
            res.redirect('/d')
        })
        .catch(err =>{
            res.redirect('/error-page-d');
        });

}
exports.createE = (req,res)=>{
    // validate request
    
    if(!req.body){
        res.status(400).send({ message : "אנא אשלם את הפרטים החסרים"});
        return;
    }
   
    //req.body.email=req.body.email.trim();

    // new user
    const e = new Edb({
        name: req.body.name,
        PhoneNumber: req.body.PhoneNumber,
        //email: req.body.email,
        numOfF: req.body.numOfF,
        numOfM: req.body.numOfM,
        status: req.body.status,
        notes: req.body.notes
    })

    // save user in the database
    e
        .save(e)
        .then(data => {
            //res.send(data)
            res.redirect('/e')
        })
        .catch(err =>{
            res.redirect('/error-page-E');
        });

}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    {
        Participentsdb.find()
            .then(participent => {
                res.send(participent)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

exports.findF = (req, res)=>{

    {
        Katzdb.find()
            .then(freiman => {
                res.send(freiman)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

exports.findB = (req, res)=>{

    {
        Bdb.find()
            .then(b => {
                res.send(b)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

exports.findC = (req, res)=>{

    {
        Cdb.find()
            .then(c => {
                res.send(c)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}
exports.findD = (req, res)=>{

    {
        Ddb.find()
            .then(d => {
                res.send(d)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}
exports.findE = (req, res)=>{

    {
        Edb.find()
            .then(e => {
                res.send(e)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

