module.exports = function(){
    var mongoose = require('mongoose');
    var mongo = mongoose.connect('');
    return mongo;
  }