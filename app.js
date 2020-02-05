const app = require('express')()

const fruits = ['apple', 'orange', 'banana']

app.get('/', (req, res) => {
  res.send(fruits[Math.floor(Math.random() * fruits.length)]);
});
 
module.exports.app = app;
