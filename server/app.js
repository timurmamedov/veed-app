const express  = require('express');
const morgan   = require('morgan');
const path     = require('path');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

// configure environment variables
require('dotenv').config();

// connect to database
mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds157247.mlab.com:57247/veed-app', {
  server: {
    socketOptions: {
      socketTimeoutMS: 0,
      connectionTimeout: 0
    }
  }
});

// load the user model
var User = require('../src/models/user');


// APP SETUP //////////////////////////////////////////////////////

const app = express();


// MIDDLEWARE SETUP //

// Setup logger
app.use( morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use( express.static(path.resolve(__dirname, '..', 'build')));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// API //////////////////////////////////////////////////////

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); 
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/users')

    // create a user (accessed at POST http://localhost:8080/api/users)
    .post(function(req, res) {
        
        var user = new User();      // create a new instance of the user model
        user.name = req.body.name;  // set the users name (comes from the request)

        // save the user and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });
        
    })

    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });

app.use('/api', router);


// REACT APP //////////////////////////////////////////////////////

// Always return the main index.html, so react-router render the route in the client
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


module.exports = app;