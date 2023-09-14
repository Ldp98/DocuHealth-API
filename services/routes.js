const express = require('express');
const router = new express.Router();
const expediente = require('../controllers/expediente.js');
const user = require('../controllers/user.js');


router.route('/expediente/:id?')
  .get(expediente.get)
  .post(expediente.post)

router.route('/user/:id?')
  .get(user.get)
  .post(user.post)


  module.exports = router;