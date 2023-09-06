const express=require('express');
const route=express.Router()

const services= require('../services/render');
const controller=require('../controller/controller');

route.get('/',services.homeRoutes);
route.get('/a',services.homeRoutesA);
route.get('/c',services.homeRoutesC);
//route.get('/add-user',services.add_user);
route.get('/guest-list',services.guest_list);
route.get('/guest-list-i',services.guest_list_C);
route.get('/guest-list-katz',services.guest_list_katz);
//route.get('/chaim-bar-mitzva',services.add_rsvp);
route.get('/error-page',services.error_page);
route.get('/error-page-freiman',services.error_pageF);
route.get('/error-page-C',services.error_pageC);
route.get('/chaim-bar-mitzva',services.rsvp_A);
route.get('/avigail-ariel',services.rsvp_C);
route.post('/api/freiman', controller.createF);
route.post('/api/participents', controller.create);
route.post('/api/c', controller.createC);
route.get('/api/participents', controller.find);
route.get('/api/freiman', controller.findF);
route.get('/api/c', controller.findC);

module.exports=route