var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    firstName : {type : String,required : true},
    lastName : {type : String,required : true},
    role: {
        type: String,
        enum: ['admin', 'user'], // Liste enum des rôles valides
        default: 'user' // Valeur par défaut si le champ role n'est pas spécifié
    },
    email : {type: String, required: true, unique : true},
    password: {type : String, required: true}
})

module.exports = mongoose.model('User', userSchema);