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
exports.homeRoutesB=(req,res)=>{
    axios.get('http://localhost:3000/api/b')
        .then(function(response){
            res.render('index B', {b:response.data});
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
exports.homeRoutesE=(req,res)=>{
    axios.get('http://localhost:3000/api/e')
        .then(function(response){
            res.render('index E', {e:response.data});
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
exports.error_pageB=(req,res)=>{
    res.render('error_pageB');
}
exports.error_pageC=(req,res)=>{
    res.render('error_pageC');
}
exports.error_pageD=(req,res)=>{
    res.render('error_pageD');
}
exports.error_pageE=(req,res)=>{
    res.render('error_pageE');
}
exports.add_rsvp=(req,res)=>{
    res.render('add_rsvp');
}
exports.rsvp_A=(req,res)=>{
    res.render('rsvp_A');
}
exports.rsvp_B=(req,res)=>{
    res.render('rsvp_B');
}
exports.rsvp_C=(req,res)=>{
    res.render('rsvp_C');
}
exports.rsvp_D=(req,res)=>{
    res.render('rsvp_D');
}
exports.rsvp_E=(req,res)=>{
    res.render('rsvp_E');
}
exports.guest_list=(req,res)=>{
   
    axios.get('http://localhost:3000/api/participents')
        .then(function(response){
            
            res.render('guest_list', {participents:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.guest_list_B=(req,res)=>{
    axios.get('http://localhost:3000/api/b')
        .then(function(response){
            res.render('guest_list_B', {b:response.data});
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
exports.guest_list_E=(req,res)=>{
    axios.get('http://localhost:3000/api/e')
        .then(function(response){
            res.render('guest_list_E', {e:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

