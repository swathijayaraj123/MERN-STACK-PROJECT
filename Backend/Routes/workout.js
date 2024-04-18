import express from 'express'
import {CreatenewWorkout,getallworkouts, getsingleworkout,delteWorkout,updateworkout }from '../controllers/controllers.js'
const router=express.Router()

// get all workout
router.get('/', getallworkouts)

// Get a single workout
router.get('/:id',getsingleworkout)

//post a new workout or create a new workout 
router.post('/', CreatenewWorkout)

 // delete the workout
 router.delete('/:id',delteWorkout)

 // update the workout
 router.patch('/:id',updateworkout )

export default router