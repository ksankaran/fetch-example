var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/vendor', express.static('node_modules'));

app.get('/add/:number1/:number2', function(req, res) {
  var params = req.params, number1 = parseInt(params.number1 || 0, 10), number2 = parseInt(params.number2 || 0, 10);
  console.log("Received request to add: ", number1, number2);
  res.send({
    status : 'SUCCESS',
    total : (number1 + number2)
  });
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000! : http://localhost:3000/index.html')
});
