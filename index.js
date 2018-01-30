const express = require('express');
const db = require('./mongodb');
const router = require('./routes');

// middleware
const parser = require('body-parser');

// Setup server
const app = express();

// Inject middleware
app.use(parser.json());

// Serve up static files
app.use('/scripts', express.static('./node_modules'));
app.use(express.static('./public'));

// Inject router on / main path
app.use('/', router);

app.listen(3000, () => console.log('***************************************' + '\n' + 'Server running, listening on port 3000' + '\n' + '***************************************')); 