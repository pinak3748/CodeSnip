require("dotenv").config();
const express = require("express");
const cors = require('cors');
const {cookie} = require("express-validator");
var cookieParser = require('cookie-parser')
const app = express();

app.use(cookieParser());
app.use(cors({credentials: true, origin: ['https://www.codesnip.me']}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./db/connection");

const PORT = process.env.PORT;
app.listen(PORT, (error) => {
    if (error) return handleError(error);
    else return console.log(`App listening on port ${PORT} `);
});

require("./routes/routes")(app);
