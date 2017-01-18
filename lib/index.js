'use strict';

import express from 'express';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

let app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(favicon('favicon.ico'));

app.get('/', (req, res) => {
    res.render('pages/index');
});

const port = 8080;

app.listen(port);
console.log(`App running on port ${port}.`);
