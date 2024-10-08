const WebSocket = require('ws');
const config = require('./config/config');
const { authenticate } = require('./middlewares/authMiddleware');
const connectionController = require('./websocket-server/controllers/connectionController');

const server = new WebSocket.Server({ port: config.port });

server.on('connection', (ws) => {
    ws.authenticated = false;

    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.action === 'auth') {
            authenticate(ws, parsedMessage);
        } else {
            connectionController.handleMessage(ws, parsedMessage);
        }
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

console.log(`WebSocket server is running on ws://localhost:${config.port}`);
