import express from 'express';
import colors from 'colors'
import authRoutes from './routes/authRoutes.js'


import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
    //root route http://localhost:8000/
    res.send('Hello world')
})

app.use('/api/auth',authRoutes)

app.listen(PORT, () => { console.log(`Server Started at PORT: ${PORT}`.bgBlue.white) });