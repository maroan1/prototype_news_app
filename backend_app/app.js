const express = require('express');
const cors = require('cors');

const newsRoutes = require('./routes/newsRouter');
const testRoutes = require('./routes/testRouter');
const globalErrorHandler = require('./controllers/errorController');
const app = express();

//CORS-enabled for all origins
app.use(cors());

// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/news', newsRoutes);
app.use('/test', testRoutes);

app.use('*', (req, res, next) => {
    const err = new Error('undefined route');
    err.statusCode = 404;
    err.status = 'fail';
    next(err, req, res, next);
});

app.use(globalErrorHandler);

module.exports = app;