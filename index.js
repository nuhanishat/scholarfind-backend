require('dotenv').config();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { routes } from "./src/routes/routers";


const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 6004;

//Middleare
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('[MONGOOSE] Connected to MongoDB connected'))
.catch(err => console.error('[MONGOOSE] MongoDB connection error', err));

//Define routes
routes(app);

app.use((req, res, next) => {
    console.log(`[SERVER][${new Date().toISOString()}] ${req.method} ${req.originalUrl}`)
    next();
})

app.get('/api', (req, res) => {
    res.send(`[API] Server is running on PORT:${PORT}`)
})

app.listen(PORT, () => {
    console.log(`[SERVER] Server running on port ${PORT}`)
})