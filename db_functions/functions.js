const {Event} = require('./models');

const createEvent = function(eventObj, callback) {
  const newEvent = new Event(eventObj);
  newEvent.save(function(err, savedEvent){
    if (err) return console.error(err);
    console.log(`${savedEvent} is saved`);
    callback(err, savedEvent);
  });
};

const getCandidateEvents = function(user_email, callback){
  Event.find({candidate_email: user_email}, function(err, events){
    if (err) return console.error(err);
    console.log(events);
    return callback(err, events);
  });
};

module.exports = {
  createEvent,
  getCandidateEvents
}