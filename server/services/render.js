const axios = require('axios');

exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3000/api/participents')
        .then(function(response){
            res.render('index', {participents:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.homeRoutesA=(req,res)=>{
    axios.get('http://localhost:3000/api/participents')
        .then(function(response){
            res.render('index A', {participents:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.homeRoutesC=(req,res)=>{
    axios.get('http://localhost:3000/api/c')
        .then(function(response){
            res.render('index C', {c:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.homeRoutesD=(req,res)=>{
    axios.get('http://localhost:3000/api/d')
        .then(function(response){
            res.render('index D', {d:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}


exports.add_user=(req,res)=>{
    res.render('add_user');
}
exports.error_page=(req,res)=>{
    res.render('error_page');
}
exports.error_pageF=(req,res)=>{
    res.render('error_pageF');
}
exports.error_pageC=(req,res)=>{
    res.render('error_pageC');
}
exports.error_pageD=(req,res)=>{
    res.render('error_pageD');
}
exports.add_rsvp=(req,res)=>{
    res.render('add_rsvp');
}
exports.rsvp_A=(req,res)=>{
    res.render('rsvp_A');
}
exports.rsvp_C=(req,res)=>{
    res.render('rsvp_C');
}
exports.rsvp_D=(req,res)=>{
    res.render('rsvp_D');
}
exports.guest_list=(req,res)=>{
    const reject = () => {
        res.setHeader("www-authenticate", "Basic");
        res.sendStatus(401);
      };
    
      const authorization = req.headers.authorization;
    
      if (!authorization) {
        return reject();
      }
    
      const [username, password] = Buffer.from(
        authorization.replace("Basic ", ""),
        "base64"
      )
        .toString()
        .split(":");
    
      if (!(username === "idan" && password === "alisa")) {
        return reject();
      }
    
    
    axios.get('http://localhost:3000/api/participents')
        .then(function(response){
            
            res.render('guest_list', {participents:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.guest_list_C=(req,res)=>{
    axios.get('http://localhost:3000/api/c')
        .then(function(response){
            res.render('guest_list_C', {c:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.guest_list_katz=(req,res)=>{
    axios.get('http://localhost:3000/api/freiman')
        .then(function(response){
            res.render('guest_list_katz', {freiman:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.guest_list_D=(req,res)=>{
    axios.get('http://localhost:3000/api/d')
        .then(function(response){
            res.render('guest_list_D', {d:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

