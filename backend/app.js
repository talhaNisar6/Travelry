
const express = require('express');
const app = express();
const getTravel = require('./routes/travel')
const connectDB = require('./db/connect');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
mongoose.set('strictQuery',false)
//middleware
app.use(express.json());


//routes
app.get('/',(req,res)=>{
res.send('Task Manager App')
})

app.use('/travelry',getTravel)

const port = 3000;

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))

    } catch (error) {
        console.log(error);
    }
}
start()

