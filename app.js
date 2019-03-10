 let mongoose=require('mongoose');
let HeroModel = require('./models/Hero');
mongoose.connect('mongodb://localhost:27017/mongof', {useNewUrlParser:true});
 async function start() {
   let noob =  await  HeroModel.create({
       name: 'Kolya',
       surname: 'and',
       age:99
   })
     console.log(noob);
}
start().then( ()=> {
    console.log('ok');
});

