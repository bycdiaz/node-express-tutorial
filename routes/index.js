const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const carlos = {
    name: "Carlos",
    age: 100,
    cool: true
  }
  res.json(carlos);
});

router.get('/reverse/:name', (req, res) => {
  const reversedName = [...req.params.name].reverse('').join('');
  res.send(reversedName);
})

module.exports = router;
