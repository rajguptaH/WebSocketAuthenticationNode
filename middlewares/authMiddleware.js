const { credentials } = require('../config/config');

function authenticate(ws, message) {
    const { username, password } = message;
    if (username == credentials.username && password == credentials.password) {
        ws.authenticated = true;
        ws.send(JSON.stringify({ type: 'auth', status: 'success', message: "Authenticated successfully" }));
    } else {
        ws.send(JSON.stringify({ type: 'auth', status: 'fail', message: "Authentication failed" }));
    }
}

module.exports = { authenticate };
