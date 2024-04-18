import WorkoutModel from '../Models/WorkoutModel.js'
import mongoose from 'mongoose'
// get all workouts
const getallworkouts=async(req, res)=>{
    const workout= await WorkoutModel.find({}).sort({_id:-1})
    res.status(200).json({workout})
}

//get a single workout
const getsingleworkout=async(req, res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({msg:"no such record found"})
    }
    const workout= await WorkoutModel.findById(id)
    if(!workout){
        return res.status(400).json({error:"no record found"})
    }
    res.status(200).json({workout})
}

// create a new workout
const CreatenewWorkout=async (req, res)=>{
    const {title, reps, loads}= req.body
    // add document to db
    try{
        const workout= await WorkoutModel.create({title, reps, loads})
        res.status(200).json(workout)
    }
    catch(error)
    {
        return res.status(400).json({error: error.message})
    }
  
}



// delete a  workout
const delteWorkout=async(req, res)=>{
    
    const {id} =req.params
    // checking if it valid using the mongoose
    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log(req.params)
        return res.json({msg:"no such record found"})

    }
    const workout=await WorkoutModel.findByIdAndDelete(id)
    res.status(200).json({msg:"the record has been deleted"})
}



//update a workout
const updateworkout= async(req, res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.json({msg:'no such record found'})
    }
    const workout= await WorkoutModel.findByIdAndUpdate({_id:id}, {...req.body } )
   if(!workout){
    return res.status(400).json({msg:'No such workout'})
   }
   res.status(200).json(workout)
}



export {CreatenewWorkout,getallworkouts, getsingleworkout, delteWorkout,updateworkout}