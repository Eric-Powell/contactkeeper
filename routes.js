const router = require('express').Router();
const Friend = require('./models/friendSchema');

router.get('/friends', (req, res) => {
  // console.log('db search results', Friend.find({}))
	Friend.find({}).then((contact) => res.send(contact || [])).catch((err) => console.error('There was an error retrieving your friends from the database: ', err));
});

router.post('/friends', (req, res) => {
	let firstName = req.body.firstName;
	let lastName = req.body.lastName;
	let number = req.body.number;
	let email = req.body.email;
	let address1 = req.body.address1;
	let address2 = req.body.address2;
	let city = req.body.city;
	let state = req.body.state;
	let zip = req.body.zip;
	let notes = req.body.notes;
	// let friends = req.body.friends;
  // console.log('req body: ',req.body)

	Friend.create({
		firstName: firstName,
		lastName: lastName,
		number: number,
		email: email,
		address1: address1,
		address2: address2,
		city: city,
		state: state,
		zip: zip,
		notes: notes,
		// friends: friends
	}).then(() => res.status(201).send('POST request was successfully sent!!')).catch((err) => console.error('There was an error adding your friend to the database: ', err))
});

module.exports = router;



// const personSchema = new Schema({
//   firstName: {type: String, required: true, max: 100, lowercase: true, trim: true},
//   lastName: {type: String, required: true, max: 100, lowercase: true, trim: true},
//   number: {type: String, required: true, max: 100, lowercase: true, trim: true},
//   email: {type: String, max: 100, lowercase: true, trim: true},
//   address1: {type: String, max: 200, lowercase: true, trim: true},
//   address2: {type: String, max: 200, lowercase: true, trim: true},
//   city: {type: String, max: 100, lowercase: true, trim: true},
//   state: {type: String, min: 2, max: 2, uppercase: true, trim: true},
//   zip: {type: String, min: 5, max: 5, lowercase: true, trim: true},
//   notes: [{date: Date, body: String}],
//   // friends: Array
// });

// module.exports = mongoose.model('Friend', personSchema);