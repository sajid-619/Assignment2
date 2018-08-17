var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

var chatServer = require('./lib/chatServer');
chatServer.listen(http);

var PORT = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

http.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});