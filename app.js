var express = require('express');
var app = express();
var port;

app.use(express.static('public'));

port = process.env.NODE_ENV || 3000;

app.listen(port, function() {
  console.log("Listening on", port);
});
