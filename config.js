require('dotenv').config();

const config = {
    PORT: process.env.PORT || 8081,
    HOST_NAME: process.env.HOST_NAME,
    MONGODB_URL: process.env.MONGODB_URL
}

module.exports = config;
