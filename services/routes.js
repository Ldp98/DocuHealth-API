const express = require('express');
const router = new express.Router();
const expediente = require('../controllers/expediente.js');
const user = require('../controllers/user.js');


router.route('/expediente/:id?')
  .get(expediente.get)

router.route('/user/:id?')
  .get(user.get)


  module.exports = router;