const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
// const cors = require('cors')
const server = express();
const {createEvent, getCandidateEvents, updateEvent} = require('./db_functions/functions');

// server.use(cors);
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())


const jsonParser = bodyParser.json()
mongoose.connect('mongodb://localhost/10by10');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to mongodb!');
  server.get('/', (req, res) => {

    res.send('hello');
  });

  server.get('/events', (req, res) => {
    getCandidateEvents(req.query.email, (err, events) => {
      console.log('events are:', events)
      res.send(events);
    })
  });

  server.post('/events', (req, res) => {
    console.log(req.body);
    createEvent(req.body, (err, event) => {
      if(err){
        res.send(err);
      } else {
        res.send(event);
      }
    });
  });

  server.post('/events/:event_id', (req, res) => {
    console.log(req.params);
    updateEvent(req.query.id, (err, event) => {
      if(err){
        res.send(err);
      } else {
        res.send(event);
      }
    });
  })

  server.listen(4000, () => {
    console.log('Listening on post 4000');
  })
})