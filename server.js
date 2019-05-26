const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');

const app = express();

app.use(bodyParser.json());



// Connecting to MongoDB
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true 
  }).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



// Using sessions for tracking Logins
app.use(session({
  name: 'session',
  secret: 'sessionSecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: (1000*60*60),
    sameSite: true,
    secure: false,
  }
}));


// Use Routes
app.use('/api/blog', require('./routes/blogs'));
app.use('/api/user', require('./routes/users'));

// Routes
app.get('/', (req, res) => {
    res.send('hello');
});



// Starting the Server
const PORT = process.env.PORT | 5000;
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));