import express from 'express';
import colors from 'colors'


import authRoutes from './routes/authRoutes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();

import dotenv from 'dotenv'
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //this middleware help to parse the incoming request with JSON payload(from req.body)

app.use('/api/auth', authRoutes) //main Routes


app.get("/test", (req, res) => { // Test Routes
    //root route http://localhost:8000/
    res.send('Hello Guys!')
})

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Started at PORT: ${PORT}`.bgBlue.white)
});