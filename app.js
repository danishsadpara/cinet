var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// database connection 
const mongoose = require('mongoose');

// var indexRouter = require('./routes/index');
// import routes 
const {
  userRoutes,
  adminRoutes,
  clientRoutes,
} = require('./routes');

const authMiddleware=require('./middlewares/authMiddleware');



var app = express();

// connect
mongoose.connect('mongodb://127.0.0.1:27017/mydb', (err) => {
  if (err) {
    return console.log('Error connecting with DB', err);
  }

  console.log('DB connected successfilly')
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// API call
// actual routes 
app.post('/signup',authMiddleware.userSignup);

// test routes 
// app.use('/', indexRouter);
app.use('/users', userRoutes); //mounted user router- end point of routers.
app.use('/admins', adminRoutes); //mounted user router- end point of routers.
app.use('/clients', clientRoutes); //mounted user router- end point of routers.



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
