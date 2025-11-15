require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./Routes/authentication.js');

const app = express();

const PORT = process.env.PORT || 5000;

// allow credentials (cookies) from client
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URL, {
}).then(()=> {
  console.log('Connected to MongoDB');
  app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
