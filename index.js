const WebSocket = require('ws');
const connectionController = require('./websocket-server/controllers/connectionController');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);
        connectionController.handleMessage(ws, parsedMessage);
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
