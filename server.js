const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

const sessionStore = new SequelizeStore({ db });
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));

