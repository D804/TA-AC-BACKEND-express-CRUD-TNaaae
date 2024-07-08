let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  password: { type: String, required: true },
});
let User = mongoose.model('User', userSchema);
module.exports = User;
