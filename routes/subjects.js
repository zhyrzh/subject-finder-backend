const subjectsRouter = require('express').Router();

const {
  getAllSubjects,
  addSubject,
  findSingleSubject,
} = require('../controllers/subjects');

// Gets all subjects
subjectsRouter.get('/', getAllSubjects);

// Add a subject
subjectsRouter.post('/', addSubject);

// Get single project
subjectsRouter.get('/:subject', findSingleSubject);

module.exports = subjectsRouter;
