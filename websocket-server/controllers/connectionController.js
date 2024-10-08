const users = [
    { id: 1, name: "Raj Narayan Gupta", email: "rajkumar00999.rk@gmail.com" },
    { id: 2, name: "Qasim Ahmed", email: "qasim@gmail.com" }
];

const authMiddleware = require('../../middlewares/authMiddleware');

function handleMessage(ws, message) {
    switch (message.action) {
        case 'getusers':
            getUsers(ws);
            break;
        default:
            ws.send(JSON.stringify({ error: "Invalid action" }));
            break;
    }
}

function getUsers(ws) {
    if (ws.authenticated) {
        ws.send(JSON.stringify(users));
    } else {
        ws.send(JSON.stringify({ error: "Please authenticate first" }));
    }
}

module.exports = { handleMessage };
