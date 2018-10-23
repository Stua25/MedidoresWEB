const express = require('express');
const path = require('path');
const morgan = require('morgan');
bodyParser = require('body-parser'),
cors = require('cors')
var history = require('connect-history-api-fallback');

//Authentication Packages
var session = require('express-session');
var passport = require('passport');
var MySQLStore = require('express-mysql-session')(session);

require('dotenv').config();


  itemRoutes = require('./routes/item');
  institucionesRoutes = require('./routes/institucion');
  


const app = express();
var port = process.env.PORT || 4000;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
app.use(cors());
app.use(history());

app.use(passport.initialize());
app.use(passport.session());
// app.use(logger(dev))



// routes

app.post('/logIng', (req, res) => {

  console.log(req.body);

  var email = req.body.email;
  var password = req.body.password;

  const db = require('./DB.js');
  var sql = 'CALL LogIn(?,?)';
  db.query(sql, [email, password], function (error, results, fields) {
      if (error) throw error;
    
        var user_id = results[0];
        req.login(user_id, (err)=>{
          res.redirect('http://localhost:4000/instituciones')
        })
        
      
    });
});

passport.serializeUser((user_id, done)=>{
  done(null, user_id)
});

passport.deserializeUser((user_id, done)=>{
  done(null, user_id);
});

app.use('/items', itemRoutes);
app.use('/institucion', institucionesRoutes);

// static file
app.use(express.static(path.join(__dirname, 'public')));

var options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database : process.env.DB_NAME
};

var sessionStore = new MySQLStore(options);

app.use(session({
  secret: 'ajhhhkooasdddgfghig',
  resave: false,
  store: sessionStore,
  saveUninitialized: false,

  // cookie: { secure: true }
}));

// start the server
var server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
