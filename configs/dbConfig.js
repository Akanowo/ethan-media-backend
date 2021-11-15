const mongoose = require('mongoose');

function dbConfig() {
	mongoose
		.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		})
		.then((client) => {
			if (client) {
				console.log('DB connected sucessfully'.blue.bold);
			}
		})
		.catch((err) => {
			console.log(`error connecting to db: ${err.message}`);
		});
}

module.exports = dbConfig;
