process.env.PWD = process.cwd();
var express = require('express');
var app = express();
var port;

app.use(express.static(process.env.PWD + '/public'));

app.get('/', function(req, res) {
  res.send('OK');
})

port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on", port);
});
