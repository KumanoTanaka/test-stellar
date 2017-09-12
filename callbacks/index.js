var express = require('express');
var bodyParser = require('body-parser');
var account = require('./account');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/receive', function (request, response) {
  var payment = request.body;
  console.log('/receive');
  console.log(payment);
  response.json({hoge:'fuga'});
  response.status(200).end();
});

app.post('/compliance/fetch_info', function (request, response) {
   var addressParts = request.body.address.split('*');
   var friendlyId = addressParts[0];
   account.findByFriendlyId(friendlyId).then(function(account) {
     response.json({
       first_name: account.first_name,
       last_name: account.last_name,
       address: 'GATLCZMS3ITTVSCM2VB55KT2I7OHHXOWD2QM6O4BNK5LQTD2A3T7DINC'
     });
     response.end();
   }).catch(function(error) {
     console.log('Fetch Info Error:', error);
     response.status(500).end(error.message);
   });
});

app.post('/compliance/sanctions', function (request, response) {
  var sender = request.body.sender;
  switch (sender) {
    case 'jack_brown*stellar-kumano-te.com':
      response.status(403).end();
      break;
    case 'steintor_jakupsson*stellar-kumano-te.com':
      console.log('need human help!');
      response.status(202).json({pending: 3600}).end();
      break;
    default:
      response.status(200).end();
      break;
  }
});

app.post('/compliance/ask_user', function (request, response) {
  var sender = request.body.sender;
  switch (sender) {
    case 'jack_brown*stellar-kumano-te.com':
      response.status(403).end();
      break;
    case 'steintor_jakupsson*stellar-kumano-te.com':
      console.log('need human help!');
      response.status(202).json({pending: 3600}).end();
      break;
    default:
      response.status(200).end();
      break;
  }
});

app.listen(8005, function () {
  console.log('Bridge server callbacks running on port 8005!');
});
