const express = require('express');
const cors = require('cors');
const { connectDb } = require('./connect');
const config = require('./config');
const route = require('./routes/routes');

const app = express();

app.listen(config.PORT, config.HOST_NAME, () => {
    console.log(`Server is running on : ${config.HOST_NAME}:${config.PORT}`);
})

// app.all('/', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next()
// });

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDb();

app.use(route);
