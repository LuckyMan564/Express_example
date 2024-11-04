const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const config = require('./config/config');

require('dotenv').config();

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


const User = require("./routes/userRoutes.js");
const Student = require("./routes/studentRoutes.js");

// Connect to MongoDB
connectDB();

app.use('/api/user', User);
app.use('/api/student', Student);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
