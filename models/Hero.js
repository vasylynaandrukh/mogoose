let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let HeroSchema = new Schema({
    name: String,
    surname: String,
    age: Number
});

let HeroModel = mongoose.model('hero', HeroSchema);

module.exports = HeroModel;

