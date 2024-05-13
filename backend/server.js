import express from 'express';
import dotenv from 'dotenv'
import colors from 'colors'
import cookieParser from 'cookie-parser';


import authRoutes from './routes/authRoutes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import messageRoutes from './routes/messageRoutes.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //this middleware help to parse the incoming request with JSON payload(from req.body)
app.use(cookieParser())

app.use('/api/auth', authRoutes) //User Routes
app.use('/api/messages',messageRoutes) //Message Routes


app.get("/test", (req, res) => { // Test Routes
    //root route http://localhost:8000/
    res.send('Hello Guys!')
})

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Started at PORT: ${PORT}`.bgBlue.white)
});