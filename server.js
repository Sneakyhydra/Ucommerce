/**
 * Imports
 */
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

/**
 * Database
 */
const connectDB = require('./config/db');
connectDB();

/**
 * Set Port
 */
const port = process.env.PORT || 5000;

/**
 * Initialize Express
 */
const app = express();

/**
 * Middlewares
 */
app.use(express.json({ extended: false }));
app.use(cors());
app.use(cookieParser());

/**
 * Routes
 */
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

// trying to server images form the server
app.use('/api/images/', express.static('productImages'));

/**
 * Serve static assets in production
 */
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

/**
 * Listen to port
 */
app.listen(port, () => console.log(`Listening on port ${port}`));
