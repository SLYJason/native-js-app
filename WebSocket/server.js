var WebSocket = require('ws');

var wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('server: receive connection.');

    setInterval(() => ws.send('Hello World from the Server'), 1000);

    ws.on('message', function incoming(message) {
        console.log('Server Received: %s', message);
    });
});
