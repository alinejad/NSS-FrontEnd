var database = require('../modules/database');
/*
 * GET list page.
 */

exports.index = function(req, res){
  var list = database.read(__dirname + '/../db/list.json');
  res.render('list/index', { title: 'List Page', list: list });

};