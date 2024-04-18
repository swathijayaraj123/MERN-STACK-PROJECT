import React, { useState } from 'react'



const Workoutform = ({fetchWorkouts}) => {
    const [title, setTitle]=useState('')
const [reps, setReps]=useState('')
const [loads, setLoad]=useState('')
const [error, setError]=useState('')
const [postres, setPostres]=useState('')
const handlesubmit =async(e)=>{
  e.preventDefault()
  const workout={title, reps, loads}
  const response= await fetch('http://localhost:4000/api/workout/', {
    method:'POST',
    body:JSON.stringify(workout),
    headers:{
        'Content-Type':'application/json'
    }
  })
  const json= await response.json()
  if(!response.ok){
    setError(json.error)
  }
  if(response.ok)
  {
    setTitle('')
    setReps('')
    setLoad('')
    setError('')
    console.log(json.msg)
  }
  fetchWorkouts()
}

  return (
   <form className='create' onSubmit={handlesubmit}>
   <h3>Add a New Workout</h3>
    <label >Excersize Title:</label>
    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
    <label >Reps:</label>
    <input type="number" onChange={(e)=>setReps(e.target.value)} value={reps}/>
    <label >Load (in kg):</label>
    <input type="number" onChange={(e)=>setLoad(e.target.value)} value={loads}/>
    <button type='submit'>Add Workout</button>
    {error && <div className='error'>{error}</div>}
   </form>
  )
}

export default Workoutform