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
    var mensaje = "El elemnto se ha guardado.";

    if(err){
      console.log(err);
    }else{
    }
    res.redirect('/users/');
  });

});

/*
  Método que se encarga de eliminar elementos de la base de datos.
*/
router.post('/remove', function(req, res, next){
  var id = req.body.id;
  User.find({"_id":id}).remove(function(err){
    res.redirect('/users/');
  });
});

router.get('/edit/:id', function(req, res, next){
  User.findOne({"_id":req.params.id}, function(err, user){
    res.render('users/edit',{user:user});
  });
});

router.post('/save', function(req, res, next){
  User.findOne({"_id":req.body.id}, function(err, user){
      user.usuario = req.body.usuario;
      user.nombre = req.body.nombre;
      user.apellido = req.body.apellido;
      user.edad = req.body.edad;
      user.password = req.body.password;

      user.save(function(err){
        res.redirect('/users/');
      });
  });
});

module.exports = router;
