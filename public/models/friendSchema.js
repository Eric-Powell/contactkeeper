 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstName: {type: String, required: true, max: 100, lowercase: true, trim: true},
  lastName: {type: String, required: true, max: 100, lowercase: true, trim: true},
  number: {type: String, required: true, max: 100, lowercase: true, trim: true},
  email: {type: String, max: 100, lowercase: true, trim: true},
  address1: {type: String, max: 200, lowercase: true, trim: true},
  address2: {type: String, max: 200, lowercase: true, trim: true},
  city: {type: String, max: 100, lowercase: true, trim: true},
  state: {type: String, min: 2, max: 2, uppercase: true, trim: true},
  zip: {type: String, min: 5, max: 5, lowercase: true, trim: true},
  comments: [{date: Date, body: String}],
  friends: Array
});

module.exports = mongoose.model('Friend', personSchema);


// Postman entry
// {
//   "firstName": "Jimmy",
//   "lastName": "Smith",
//   "number": "123-345-5678",
//   "email": "jjsmith@yahoo.com",
//   "address1": "809 Main St",
//   "address2": "apt 1702",
//   "city": "Brooklyn",
//   "state": "NY",
//   "zip": "11205",
//   "comments": [{"date": "11/3/2017", "body": "met Jimmy at flag football"}],
//   "friends": ["Ashley", "Karen", "Harrison"]
// }