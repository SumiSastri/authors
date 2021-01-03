const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// site security
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const helmet = require('helmet');

// middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.get('/', (req, res) => {
	res.send('app home route working');
});

mongoose.connect(
	'process.env.DB_CONNECTION',
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	},
	(error) => {
		if (!error) {
			console.log('mongo-db connection working');
		} else {
			console.log('check mongo-db connection');
		}
	}
);
mongoose.Promise = global.Promise;

app.listen(5000, () => console.log(`app server connected on port ${port}`));
