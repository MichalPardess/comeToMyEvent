const express=require('express');
const route=express.Router()

const services= require('../services/render');
const controller=require('../controller/controller');

route.get('/',services.homeRoutes);
route.get('/a',services.homeRoutesA);
route.get('/b',services.homeRoutesB);
route.get('/c',services.homeRoutesC);
route.get('/d',services.homeRoutesD);
route.get('/e',services.homeRoutesE);
//route.get('/add-user',services.add_user);
route.get('/guest-list',services.guest_list);
route.get('/guest-list-shus',services.guest_list_B);
route.get('/guest-list-shun',services.guest_list_C);
route.get('/guest-list-atzur',services.guest_list_D);
route.get('/guest-list-bikel',services.guest_list_E);
route.get('/guest-list-katz',services.guest_list_katz);
//route.get('/chaim-bar-mitzva',services.add_rsvp);
route.get('/error-page',services.error_page);
route.get('/error-page-freiman',services.error_pageF);
route.get('/error-page-B',services.error_pageB);
route.get('/error-page-C',services.error_pageC);
route.get('/error-page-D',services.error_pageD);
route.get('/error-page-E',services.error_pageE);
route.get('/michael-tamar',services.rsvp_A);
route.get('/shimon-noa',services.rsvp_B);
route.get('/shira-uriel',services.rsvp_C);
route.get('/shira-uriel-wedding',services.rsvp_C2);
route.get('/uriel-shira',services.rsvp_D);
route.get('/chagai-ayala',services.rsvp_E);
route.post('/api/freiman', controller.createF);
route.post('/api/participents', controller.create);
route.post('/api/b', controller.createB);
route.post('/api/c', controller.createC);
route.post('/api/d', controller.createD);
route.post('/api/e', controller.createE);
route.get('/api/participents', controller.find);
route.get('/api/freiman', controller.findF);
route.get('/api/b', controller.findB);
route.get('/api/c', controller.findC);
route.get('/api/d', controller.findD);
route.get('/api/e', controller.findE);

module.exports=route