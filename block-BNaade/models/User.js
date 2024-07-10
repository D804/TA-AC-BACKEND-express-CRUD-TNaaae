let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);
let User = mongoose.model('User', userSchema);
