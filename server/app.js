// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
// Server on
app.listen(
    process.env.PORT, 
    () => console.log(`Server running on port: ${process.env.PORT}`)
);