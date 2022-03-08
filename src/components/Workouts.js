import React, { useEffect, useState } from "react";


function GetWorkouts () {
   const [ workoutList, setWorkoutList ] = useState();
    useEffect(() => {
        //load data from API
        // fetch('https://gym-project-dc.uc.r.appspot.com')
        fetch('http://localhost:3001/workout')
          .then(response => response.json())
          .then(data => setWorkoutList(data))
          .catch(err => console.error(err))
    }, [workoutList])
    return (
        <>
        <h1>Here Are my workouts</h1>
        
        </>
        )
}

export default GetWorkouts;