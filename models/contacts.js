const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
first_name:{
    type:String,
    requiredired:true
},
last_name:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
}
});

var Contact = module.exports = mongoose.model('Contact',ContactSchema);
