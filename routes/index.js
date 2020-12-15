const express = require('express');
const router = express.Router();
const helpers = require('../helpers');

// Do work here
router.get('/', (req, res) => {
  // const carlos = {
  //   name: "Carlos",
  //   age: 100,
  //   cool: true
  // }
  // res.json(carlos);

  res.render('hello', {
    title: 'I Love Food',
    saleEnd: helpers.moment().endOf('day').fromNow()
  });
});

router.get('/reverse/:name', (req, res) => {
  const reversedName = [...req.params.name].reverse('').join('');
  res.send(reversedName);
})

module.exports = router;
