const SubjectSchema = require('../models/subject');

module.exports.getAllSubjects = async (req, res, next) => {
  try {
    const subjects = await SubjectSchema.find();
    if (!subjects) {
      res.status(400).json({ msg: 'no subjects added' });
    }
    res.status(200).json(subjects);
  } catch (error) {
    console.log(error);
  }
};

module.exports.addSubject = async (req, res, next) => {
  const { code, description, section, schedule, groupLink } = req.body;
  try {
    let subject = new SubjectSchema({
      code,
      description,
      section,
      schedule,
      groupLink,
    });

    const data = await subject.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ msg: 'subject code already used' });
  }
};

module.exports.findSingleSubject = async (req, res, next) => {
  const subject = req.params.subject;

  try {
    const code = await SubjectSchema.findOne({ code: subject });
    if (!code) {
      return res.status(400).json({ msg: 'no subject found' });
    }
    res.status(200).json(code);
  } catch (error) {
    console.log(error.message);
  }
};
