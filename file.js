var fs = require('fs');

module.exports = {
  readFile: function(callback){
    fs.readFile('./helloWorld.txt', 'utf8', function(err, data){
      if(err) throw err;
      callback(data);
    })
  }

}
