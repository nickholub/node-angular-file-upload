var express = require('express');
var busboy = require('connect-busboy');
var path = require('path');
var fs = require('fs-extra');

var app = express();
app.use(busboy());
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, '.tmp'))); //TODO

app.route('/upload')
  .post(function (req, res) {
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
      var stream = fs.createWriteStream(__dirname + '/upload/' + filename);
      file.pipe(stream);
      stream.on('close', function () {
        console.log('File ' + filename + ' is uploaded');
        res.json({
          filename: filename
        });
      });
    });
  });

var server = app.listen(3005, function() {
  console.log('Express is listening on port ' + server.address().port);
});