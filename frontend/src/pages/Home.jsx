import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../componenets/WorkoutDetails'
import Workoutform from '../componenets/Workoutform'
const Home = ({}) => {
  const [workout, setWorkout]=useState([])
  function fetchWorkouts(){
    fetch('http://localhost:4000/api/workout')
  .then(response=>{
    if(!response.ok){
      throw new Error("failed to fetch the resources")
    }
   
    return response.json()
    
  }).then(data=>{
    setWorkout(data.workout)
    console.log(data.workout)
  }).catch((err)=>{
    throw new Error(err)
  })
  }

  useEffect(()=>{
   
    fetchWorkouts()
  },[])
  return (
    <div className='home'>
    <div className="workouts">
    {
        workout.map((eachdata, index)=>(<WorkoutDetails key={eachdata._id} workout={eachdata} fetchWorkouts={fetchWorkouts}/>))
    }
    </div>
    <Workoutform fetchWorkouts={fetchWorkouts} />
     
    </div>
  )
}

export default Home

// lesson learned here is that when the response is in terms of objects they must be connverted to a proper array in order to be able to show it in frontend and have map function over it  else the map function is not going to work
// fetch('https://api.example.com/data')
//   .then(response => response.json()) 
// The response object in the Fetch API represents the response to an HTTP request. It contains information about the response, such as the status code, headers, and the body of the response. You can use properties and methods of the response object to access and handle the response data in your JavaScript code.

//   .then(data => {
//     console.log(data); // This is the parsed data from the response body
//     // You can now work with the 'data' object
//   })
// In this example, data is the parsed JavaScript object representing the JSON data from the server's response body. You can then use this data object in your code as needed.



//   .catch(error => {
//     console.error('Error:', error);
//   });
