const express=require('express');
const route=express.Router()

const services= require('../services/render');
const controller=require('../controller/controller');

route.get('/',services.homeRoutes);

//route.get('/add-user',services.add_user);
route.get('/guest-list',services.guest_list);
route.get('/guest-list-freiman',services.guest_list_freiman);
route.get('/avraham-efrat',services.add_rsvp);
route.get('/error-page',services.error_page);
route.get('/error-page-freiman',services.error_pageF);
route.get('/zviki-tamar-freiman',services.zviki_tamar_freiman);
route.post('/api/freiman', controller.createF);
route.post('/api/participents', controller.create);
route.get('/api/participents', controller.find);
route.get('/api/freiman', controller.findF);

module.exports=route