const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

process.on('uncaughtException', err => {
    console.error('Uncaught exception. Shutting down...');
    console.error(err);
    process.exit(1);
});

const app = require('./app');
const { fillDB } = require('./utils/dbUtils');

const database = process.env.DATABASE;

mongoose.connect(database)
    .then(con => {
        console.log('Connected to database.');
        if (process.env.INIT_DB) {
            fillDB();
        }
    });

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Application is listening on port ${port}`);
});

process.on('unhandledRejection', err => {
    console.error('Unhandled rejection. Shutting down...');
    console.error(err.message);
    server.close(() => {
        process.exit(1);
    });
});

