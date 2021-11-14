const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.json({ msg: 'Hello from the home page!' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('Listening on ', PORT));
