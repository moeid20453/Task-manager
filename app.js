const express = require('express');
const app = express();
const connectDB = require('./db/connection');
require('dotenv').config();
const notFound = require('./middleware/not_found');
const errorHandlerMiddleware = require('./middleware/error_handler');

app.use(express.static('./public'));
app.use(express.json());

const tasks = require('./routes/tasks');

app.use('/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () =>
console.log(`Server is listening on port ${port}...`));



