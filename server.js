const express = require('express');
const app = express();

var array = [];
for(var i = 1; i <= 100; i++) {
  array.push(randomNumber(i));
}
for (var i = array.length - 1; i > 0; i--) {
  var j = randomNumber(i);
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function randomNumber(i) {
  return Math.floor(Math.random() * (i + 1));
}

app.use(express.static('public'));
app.get('/data', function(req, res) {
  res.json({
    data: array.toString()
  });
});

app.listen(8080, function() {
  console.log('Listening on port 8080');
});
