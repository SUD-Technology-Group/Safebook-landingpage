const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect(
			'mongodb+srv://safebook:safebook@cluster0.k4clata.mongodb.net/db?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		console.log('Connect db successfully');
	} catch (error) {
		console.log('Fail to connect db');
	}
}

module.exports = { connect };
