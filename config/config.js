require('dotenv').config();
module.exports = {
    port: process.env.PORT || 8080,
    credentials: {
        username: process.env.USERNAME || 'Raj',
        password: process.env.PASSWORD || 'admin@123'
    }
};
