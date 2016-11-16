var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
//var User = require("../models/users").User;
var User = require("../models/users").User;

/* GET home page. */
router.get('/', function(req, res, next) {

  /*
  var userSchemaJson = {
    usuario:{type:String},
    nombre:{type:String},
    apellido:{type:String},
    password:{type:String},
    edad:{type:Number}
  };
  */

  //El constructor debe seguir el schema (como json)
  var user = new User({
    usuario: "luis19",
    nombre: "Luis",
    apellido: "Ramirez",
    password: "123456",
    edad: 25
  });

  console.log(user);

  user.save(function(err, object){
    if(err){
      console.log(err);
    }
    res.render('index', { title: 'Express' });
  });
});

module.exports = router;
