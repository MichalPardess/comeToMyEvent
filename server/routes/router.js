const express=require('express');
const route=express.Router()

const services= require('../services/render');
const controller=require('../controller/controller');

route.get('/',services.homeRoutes);

//route.get('/add-user',services.add_user);
route.get('/guest-list',services.guest_list);
route.get('/guest-list-katz',services.guest_list_katz);
route.get('/bentzi-tovi-y',services.add_rsvp);
route.get('/error-page',services.error_page);
route.get('/error-page-freiman',services.error_pageF);
route.get('/bentzi-tovi',services.bentzi_tovi);
route.post('/api/freiman', controller.createF);
route.post('/api/participents', controller.create);
route.get('/api/participents', controller.find);
route.get('/api/freiman', controller.findF);

module.exports=route