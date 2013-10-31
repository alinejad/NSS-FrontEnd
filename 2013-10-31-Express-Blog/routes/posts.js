
/*
 * GET /posts
 */

exports.index = function(req, res){
  res.render('posts/index', {title: 'Express'});
};


/*
 * GET /posts/new
 */

exports.new = function(req, res){
  res.render('posts/new', {title: 'Express'});
};


/*
 * post /posts
 */

exports.create = function(req, res){
  res.redirect('/posts');
};


/*
 * GET /posts/:id/edit
 */

exports.edit = function(req, res){
  res.render('home/edit', {title: 'Express'});
};


/*
 * put /posts/:id
 */

exports.update = function(req, res){
  res.redirect('posts/' + req.params.id);
};


/*
 * GET /posts/:id
 */

exports.show = function(req, res){
  res.render('posts/show', {title: 'Express'});
};


/*
 * delete /posts/:id
 */

exports.delete = function(req, res){
  res.redirect('/posts');
};
