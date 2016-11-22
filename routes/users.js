var express = require('express');
var router = express.Router();
var User = require("../models/users").User;


/*
  Nos sirve para enlistar todos los usuarios del sistema.
*/
router.get('/', function(req, res, next) {
  User.find({}, function(err, users){
    res.render('users/index', {users:users});
  });
});

/*
  Sirve para mandar llamar un nuevo formulario, para un nuevo
  usuario.
*/
router.get('/new', function(req, res, next){
  res.render('users/new', {});
});

/*
  crear un nuevo usuario en la base de datos
*/
router.post('/create', function(req, res, next){

  var user = new User({
    usuario: req.body.usuario,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    password: req.body.password,
    edad: req.body.edad
  });

  user.save(function(err, object){
    if(err){
      console.log(err);
    }
    res.redirect('/users/');
  });

})

module.exports = router;
