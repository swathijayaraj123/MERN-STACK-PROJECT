import React, { useState } from 'react'

const WorkoutDetails = ({workout,fetchWorkouts}) => {
  
  async function handledelete(){
    // console.log(workout._id)
    // console.log(`http://localhost:4000/api/workout/${workout._id}`)
    const response= await fetch(`http://localhost:4000/api/workout/${workout._id}`, {
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
    })
    if (!response.ok) {
      const errorJson = await response.json();
      console.log(errorJson.msg);
    } else {
      const successJson = await response.json();
      console.log(successJson.msg);
    }
  fetchWorkouts()
}
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Reps:</strong>{workout.reps}</p>
        <p><strong>Load (kg):</strong>{workout.loads}</p>
        <div ><button style={{ position:'absolute', right:'20px', bottom:'20px'}} onClick={handledelete}>delete</button></div>
    </div>
   
  )
}

export default WorkoutDetails