var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var swagger = require('./swagger');
const session = require('express-session');
const mysql = require('mysql2/promise');
const mySqlStore = require('express-mysql-session')(session);
const passport = require('passport');
const { trainerIdStategy } = require('./utils/auth-strategies');
const { userDeserializer, userSerializer } = require('./controllers/trainer');

passport.use(trainerIdStategy);

passport.serializeUser(userSerializer);

passport.deserializeUser(userDeserializer);

const poolOptions = {
    connectionLimit: 10,
    password: process.env.DBPASSWORD,
    user: process.env.DBUSER,
    database: process.env.DBSCHEMA,
    host: process.env.DBHOST,
    port: process.env.DBPORT
};

const storeOptions = {
    createDatabaseTable: true
};

const authMysqlConnection = mysql.createPool(poolOptions)
const sessionStore = new mySqlStore(storeOptions, authMysqlConnection);

var indexRouter = require('./routes');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'sad',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', indexRouter);
app.use('/docs', swagger);

module.exports = app;