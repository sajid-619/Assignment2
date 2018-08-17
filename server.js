var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var users = [];
var connections = [];

server.listen(process.env.PORT || 27017);
console.log('Server running...');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html'); 
});

io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log("Connected: %s sockets connected", connections.length);
    
    //Disconnect
    
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected: %s sockets connected", connections.length);
});




