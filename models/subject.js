const { Schema, model } = require('mongoose');

const SubjectSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  groupLink: {
    type: String,
    required: true,
  },
});

module.exports = model('subjects', SubjectSchema);
