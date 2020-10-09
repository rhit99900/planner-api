const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose')

const passport = require('passport');
const session = require('express-session')

// Require Models 
const User = require('./models/user');

// Require Routes 
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const teamsRouter = require('./routes/teams');
const organistionRouters = require('./routes/organisations');

const app = express();

// Connect to Database 
mongoose.connect('mongodb://localhost:27017/planner', { useNewUrlParser: true, useUnifiedTopology: true  })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open',() => {
  console.log('Connected')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure Passpport and Sessions 

app.use(session({
  secret: 'Hey, Wassup?',
  resave: false,
  saveUninitialized: true,  
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy()); 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Mounting Routes

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teams', teamsRouter);
app.use('/organisations',organistionRouters);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
