const users= require('../models/travel')


//on register page
const addUser = async (req,res)=>{
try {
        console.log("creating");
        const user = await users.create(req.body);
        console.log("created");
        res.status(201).json({user});
    
} catch (error) {
    res.status(500).json({msg:error})
}
}


//main page
const clickedTravel=(req,res)=>{
    res.send('Travel Page')
}
const clickedUploads=(req,res)=>{
    res.send('Uploads Page')
}
const clickedSignIn=(req,res)=>{
    res.send('Sign In Page')
}
const clickedRegister=(req,res)=>{
    res.send('Register Page')
}
const clickedHotels=(req,res)=>{
    res.send('Hotels Page')
}
const clickedPlaces=(req,res)=>{
    res.send('Places Page')
}
const clickedWeather=(req,res)=>{
    res.send('Weather Page')
}
const clickedToDos=(req,res)=>{
    res.send("To Do's Page")
}
module.exports= {clickedHotels,clickedPlaces,clickedRegister,
    clickedSignIn,clickedToDos,clickedTravel,
    clickedUploads,clickedWeather,addUser,}