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

exports.add_user=(req,res)=>{
    res.render('add_user');
}
exports.error_page=(req,res)=>{
    res.render('error_page');
}
exports.error_pageF=(req,res)=>{
    res.render('error_pageF');
}
exports.add_rsvp=(req,res)=>{
    res.render('add_rsvp');
}
exports.zviki_tamar_freiman=(req,res)=>{
    res.render('zviki_tamar_freiman');
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

exports.guest_list_freiman=(req,res)=>{
    axios.get('http://localhost:3000/api/freiman')
        .then(function(response){
            res.render('guest_list_freiman', {freiman:response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}