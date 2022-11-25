var Participentsdb= require('../model/model');
var Freimandb= require('../model/modelF');
// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "אנא אשלם את הפרטים החסרים"});
        return;
    }

    // new user
    const participent = new Participentsdb({
        name: req.body.name,
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
            res.redirect('/')
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
    const freiman = new Freimandb({
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
        Freimandb.find()
            .then(freiman => {
                res.send(freiman)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

