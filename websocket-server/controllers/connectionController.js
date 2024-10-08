const users = [
    { id: 1, name: "Raj Narayan Gupta", email: "rajkumar00999.rk@gmail.com" },
    { id: 2, name: "Qasim Ahmed", email: "qasim@gmail.com" }
];
const validCredentials = { username: "raj", password: "admin@123" };

function handleMessage(ws, message) {
    switch (message.action) {
        case 'auth':
            authenticate(ws, message);
            break;
        case 'getusers':
            getUsers(ws);
            break;
        default:
            ws.send(JSON.stringify({ error: "Invalid action" }));
            break;
    }
}

function authenticate(ws, message) {
    const { username, password } = message;
    if (username === validCredentials.username && password === validCredentials.password) {
        ws.authenticated = true;
        ws.send(JSON.stringify({ message: "Authenticated successfully" }));
    } else {
        ws.send(JSON.stringify({ error: "Authentication failed" }));
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
