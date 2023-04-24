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
// Middleware
app.use(express.json());
// Routers
app.use('/api/v1/posts', require('./routes/postRoutes'));
// Catch all route
app.get('*', (req, res) => {
    try {
        res.status(200).json({
            status: 'Success',
            message: 'The route you are looking for doesn\'t exist'
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            error: err
        });
    }
});
// Server on
app.listen(
    process.env.PORT, 
    () => console.log(`Server running on port: ${process.env.PORT}`)
);