var fs = require('fs');

module.exports = {
  multiply: function(a, b){
    return a * b;
  },
  addAndMultiply: function(a, b){
    return (a + b) * 5;

  },

  subtractTen: function(a){
    return a - 10;
  },

  readFile: function(callback){
    fs.readfile('./helloWorld.txt', 'utf8', function(err, data){
      if(err) throw err;
      callback(data);
    })
  }

}
