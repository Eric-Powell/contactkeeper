const router = require('express').Router();
const Friend = require('./friendSchema');

router.get('/contacts', (req, res) => res.send('GET request was successful!'));

router.post('/contacts', (req, res) => {
	let firstName = req.body.firstName;
	let lastName = req.body.lastName;
	let number = req.body.number;
	let email = req.body.email;
	let address1 = req.body.address1;
	let address2 = req.body.address2;
	let city = req.body.city;
	let state = req.body.state;
	let zip = req.body.zip;
	let comments = req.body.comments;
	let friends = req.body.friends;

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
		comments: comments,
		friends: friends
	}).then(() => res.status(201).send('POST request was successfully sent!!')).catch((err) => {throw err})
});

module.exports = router;