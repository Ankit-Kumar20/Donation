const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const authRoutes = require('./Routes/authentication');
const cors = require('cors');


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/authentication', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
