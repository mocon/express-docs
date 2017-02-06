'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(),
    debugDev = (0, _debug2.default)('dev');

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static('public'));
app.use((0, _serveFavicon2.default)('favicon.ico'));

// Routes
app.get('/:version', function (req, res) {
    res.render('pages/index', { versionNumber: req.params.version });
});

app.post('/:version/generate-html', function (req, res) {
    debugDev('Received POST request');
    debugDev(req.params.version);
});

var port = 8080;

app.listen(port);
debugDev('App running on port ' + port + '.');