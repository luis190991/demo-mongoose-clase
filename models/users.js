var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/users');

var userSchemaJson = {
  usuario:{type:String},
  nombre:{type:String},
  apellido:{type:String},
  password:{type:String},
  edad:{type:Number}
};

var userSchema = new Schema(userSchemaJson);

var User = mongoose.model("User", userSchema);
module.exports.User = User;
