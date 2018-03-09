const mongoose = require('mongoose');
const schemas = require('./schemas');

const Employer = mongoose.model('Employer', schemas.employerSchema);
const Job = mongoose.model('Job', schemas.jobsSchema);
const Recruiter = mongoose.model('Recruiter', schemas.recruiterSchema);
const Agency = mongoose.model('Agency', schemas.agencySchema);
const Candidate = mongoose.model('Candidate', schemas.candidateSchema);
const Engagement = mongoose.model('Engagement', schemas.engagementSchema);
const Event = mongoose.model('Event', schemas.eventsSchema);

module.exports = {
  Employer,
  Job,
  Recruiter,
  Agency,
  Candidate,
  Engagement,
  Event
};