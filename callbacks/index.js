var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/receive', function (request, response) {
  var payment = request.body;
  console.log('/receive');
  console.log(payment);
  response.json({hoge:'fuga'});
  response.status(200).end();
});

// TODO add compliance server callback here.

app.listen(8005, function () {
  console.log('Bridge server callbacks running on port 8005!');
});
