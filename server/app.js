// Dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
// Mongoose connection
mongoose.connect(process.env.LOCAL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((conn) => {
    console.log(`Connected to db: ${process.env.LOCAL_DB}`);
}).catch((err) => {
    console.error('Error: ', err);
});
// Root route
app.get('/', (req, res) => {
    try {
        res.status(200).json({
            status: 'Success',
            message: '/ root route',
            data: 'root get route'
        });
    } catch(err) {
        console.error(`Error: ${err}`);
    }
});
// Catch all route
app.get('*', (req, res) => {
    try {
        res.status(200).json({
            status: 'Success',
            message: 'Catch all route',
            data: null
        });
    } catch(err) {
        console.error(`Error: ${err}`);
    }
});
// Server on
app.listen(
    process.env.PORT, 
    () => console.log(`Server running on port: ${process.env.PORT}`)
);