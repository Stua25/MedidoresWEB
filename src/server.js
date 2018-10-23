const express = require('express');
const path = require('path');
const morgan = require('morgan');
bodyParser = require('body-parser'),
cors = require('cors')
var history = require('connect-history-api-fallback');

require('dotenv').config();


  itemRoutes = require('./routes/item');
  institucionesRoutes = require('./routes/institucion');
  


const app = express();
var port = process.env.PORT || 4000;

// middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(history());
// app.use(logger(dev))

// routes

app.post('/logIng', (req, res) => {

  var email = req.body.email;
  var password = req.body.password;

  const db = require('./DB.js');
  var sql = 'CALL LogIn(?,?)';
  db.query(sql, [email, password], function (error, results, fields) {
      if (error){ throw error;}
      else{
        var User ={
          idUser: results[0].ID_ROLE,
          Nombre: results[0].NOMBRE,
          email: results[0].EMAIL,
          rol: results[0].rol
        }
        res.redirect('http://localhost:4000/institucion')
      }
      

    });
});

app.use('/items', itemRoutes);
app.use('/institucion', institucionesRoutes);

// static file
app.use(express.static(path.join(__dirname, 'public')));

// start the server
var server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
