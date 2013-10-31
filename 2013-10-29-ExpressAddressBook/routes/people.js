var database = require('../modules/database');

/*
 * GET /people
 */

exports.index = function(req, res){
  var people = database.read(__dirname + '/../db/people.json');
  res.render('people/index', { title: 'People: Address Book', people: people });
};

/*
 * GET /people/new
 */

exports.new = function(req, res){
  res.render('people/new', { title: 'new person : Address Book'});
};

/*
 * GET /people/new
 */

exports.create = function(req, res){
var name - res.body.name;
var gender = res.body.gender;
var age = parseInt(req.body.age);
var color = req.body.color;

var people = database.read(__dirname + '/../db/people.json');
var person = {name: name, gender: gender, age: age, color: color};
people.push(person);
database.write(__dirname + '/../db/people.json');

res.redirect('/people');
};
