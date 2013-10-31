var fs = require('fs');
exports.read = function(filename){

  var data = fs.readFileSync(filename);
  data = JSON.parse(date);
  return data;
};

exports.read = function(filename, data){
  data = JSON.stringify(data);
  fs.writeFileSync(filename, data);
 };