var express = require('express');
var app = express();

var port = 7000;

app.use(express.static(__dirname + '/assets'));

app.listen(port, function (err) {
  if (err) throw err;

  console.log('Server is running at port '+ port);
});
