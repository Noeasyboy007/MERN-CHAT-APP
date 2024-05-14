// Package file imports
import express from 'express';
import dotenv from 'dotenv'
import colors from 'colors'
import cookieParser from 'cookie-parser';

// DB File Import 
import connectToMongoDB from './db/connectToMongoDB.js';

// Routes File Imports
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Express Server Setup
const app = express();

// Env File Config  
dotenv.config();

// Server PORT Setup
const PORT = process.env.PORT || 5000;

// Middleware Setup
app.use(express.json()); //this middleware help to parse the incoming request with JSON payload(from req.body)
app.use(cookieParser())

// Routes Setup
app.use('/api/auth', authRoutes) //User Routes
app.use('/api/messages',messageRoutes) //Message Routes
app.use('/api/users',userRoutes)   //users Routes


// Test Route Setup
app.get("/test", (req, res) => { // Test Routes
    //root route http://localhost:8000/
    res.send('Hello Guys!')
})


// App Listen
app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Started at PORT: ${PORT}`.bgBlue.white)
});