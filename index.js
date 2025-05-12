import mongoose from "mongoose";
import bodyParser from "body-parser";

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Middleare
app.use(express.json());
app.use(cors());

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB connected'))
.catch(err => console.error('MongoDB connection error', err));

//Define routes
app.use('/api/researchers', researchersRouter);

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})