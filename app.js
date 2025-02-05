var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose=require('mongoose');
var http = require('http');
var app = express();
var server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

    var io  = require('socket.io').listen(server),
        fs  = require('fs');



var db=mongoose.connection;
mongoose.connect('mongodb://localhost/Employees');

var Schema = new mongoose.Schema({
    email:String
});

var user = mongoose.model('users',Schema); 


app.get('/users',function(req,res){
    user.find({},function(err,users){
      console.log(users);
      res.send(users);
    });
});

app.post('/users',function(req,res){
  console.log(req.body.email);
  
  user.find({email:req.body.email},function(err,users){
    console.log(users);

    if(users.length==0){
        new user({
            email:req.body.email
        }).save(function(err,doc){
            if(err) res.json(err);
            else user.find({},function(err,users){
              res.send(users);
            });
        });
    }
  });
});



app.post('/deleteUser',function(req,res){
  var promise = user.find({email:req.body.email}).remove().exec();
  promise.then(function(result){
    console.log(req.body.email+" deleted");
    user.find({},function(err,users){
        res.send(users);
    });
  });
});


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

server.listen(3001);
module.exports = app;
