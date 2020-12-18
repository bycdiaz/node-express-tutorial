const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  req.flash('error', 'Something Happened');
  req.flash('info', 'Something Happened');
  req.flash('warning', 'Something Happened');
  req.flash('success', 'Something Happened');

  res.render('index', { title: 'I Love Food'});
}

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store'});
}

exports.createStore = async (req, res) => {
  const store = new Store(req.body);
  await store.save();
  req.flash('success', `Successfully Created ${store.name}.
  Care to leave a review.`);
  res.redirect('/');
}
