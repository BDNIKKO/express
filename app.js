const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Integrate third-party middleware
app.use(morgan('dev')); // Logger middleware
app.use(bodyParser.json()); // Body parser middleware


app.get('/', (req, res) => {
    res.send('Hello, welcome to the Express server!');
});

app.get('/about', (req, res) => {
    res.send('This is a basic Express server project.');
});

app.use((req, res, next) => {
    res.status(404).send('Sorry, the page you are looking for does not exist.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
