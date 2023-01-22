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

exports.homeRoutesC=(req,res)=>{
    axios.get('http://localhost:3000/api/c')
        .then(function(response){
            res.render('index C', {c:response.data});
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
exports.add_rsvp=(req,res)=>{
    res.render('add_rsvp');
}
exports.bentzi_tovi=(req,res)=>{
    res.render('bentzi_tovi');
}
exports.rsvp_C=(req,res)=>{
    res.render('rsvp_C');
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
