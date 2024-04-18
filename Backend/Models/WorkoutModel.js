import mongoose from 'mongoose'
const Shema=mongoose.Schema

const workoutSchema=new Shema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    loads:{
        type:Number,
        required:true
    }
  
}, {timestamps:true})

// creating a model

export default mongoose.model('workout', workoutSchema)