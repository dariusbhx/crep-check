import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import postRoutes from './routes/postRoutes.js'
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))
app.use('/posts',postRoutes)

const PORT = process.env.PORT || 5000





dotenv.config()
const CONNECTION_URL = 'mongodb+srv://darius_b:Aveeno23@cluster0.1o8vr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT,() => console.log(`Server running on Port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify',false)


app.use(express.json())
app.use(express.urlencoded({extended: true}))


