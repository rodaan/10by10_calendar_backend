const mongoose = require('mongoose');

const employerSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  company_name: String,
  password: String,
  email: String
});

const jobsSchema = mongoose.Schema({
  id: Number,
  title: String,
  company_name: String,
});

const recruiterSchema = mongoose.Schema({
  first_name: String,
  email: String,
  agency: String,
});

const agencySchema = mongoose.Schema({
  name: String
});

const candidateSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  password: String,
  email: String,
});

const engagementSchema = mongoose.Schema({
  candidate_email: String,
  employer_email: String
});

const eventsSchema = mongoose.Schema({
  type: String,
  start_date: Date,
  end_date: Date,
  candidate_email: String,
  employer_email: String,
  status: String
});

module.exports = {
  employerSchema,
  jobsSchema,
  recruiterSchema,
  agencySchema,
  candidateSchema,
  engagementSchema,
  eventsSchema
};