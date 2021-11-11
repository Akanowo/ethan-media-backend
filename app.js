const express = require('express');
require('dotenv').config({ path: './configs/.env' });
require('colors');

// db config
const dbConfig = require('./configs/dbConfig');

dbConfig();

const app = express();
const PORT = process.env.PORT || 3000;

// app config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
	console.log(`App Started on ${PORT}`.yellow);
});
