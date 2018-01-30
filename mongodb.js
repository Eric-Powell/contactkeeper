const mongoose = require('mongoose');

const uri = 'mongodb://EP:contactkeeper321@ds257485.mlab.com:57485/contactkeeper';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', (err) => console.error('MongoDB connection error', err));

db.once('open', () => console.log('MongoDB connected!' + '\n' + '*******************'));

module.exports = db
