const { connect } = require('mongoose');
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const db = async () => {
  console.log(process.env.DB_CONNECTION_STRING);
  try {
    await connect(process.env.DB_CONNECTION_STRING, dbOptions);
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
