
const express = require('express');
const app = express();
const getTravel = require('./routes/travel')
const connectDB = require('./db/connect');
const { default: mongoose } = require('mongoose');
const notFound=require('./middleware/notFound')


require('dotenv').config()




mongoose.set('strictQuery',false)
//middleware
app.use(express.static('../Final-Year-Project/build'));
app.use(express.json());
 
//routes
app.get('/travelry',(req,res)=>{
res.send('Travelry App')
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
app.use(notFound)

start()

