'use strict';

import express from 'express';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import debug from 'debug';
import fs from 'fs';

let app = express(),
    debugDev = debug('dev');

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(favicon('favicon.ico'));

// Route to display pre-rendered static HTML
app.get('/:version', (req, res) => {
    res.render('pages/index', { versionNumber: req.params.version });
});

// Route to render static HTML from JSON content and save file
app.post('/:version/generate-html', (req, res) => {
    const versionNumber = req.params.version;

    debugDev(`Received POST request with version number ${versionNumber}`);

    fs.writeFile(`data/${versionNumber}.json`, JSON.stringify(req.body), (err) => {
        if (err) throw err;
        debugDev(`Saved file '${versionNumber}.json'.`);
    });
});

const port = 8080;

app.listen(port);
debugDev(`App running on port ${port}.`);
