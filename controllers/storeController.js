exports.myMiddleware = (req, res, next) => {
  req.name = 'Carlos';
  res.cookie('name', 'Carlos', { maxAge: 900000000 })
  next();
}

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index', { title: 'I Love Food'});
}
