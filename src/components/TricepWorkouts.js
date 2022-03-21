import React, { useContext } from 'react';
import { Card, Button } from 'antd'
import { WorkoutContext } from '../App';
import '../App.css'


function TricepWorkouts({ userId }) {
  const { workoutList  } = useContext(WorkoutContext)
  const handleAdded = (workout) => {
    fetch(`https://gym-project-dc.uc.r.appspot.com/history/${userId}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workout)
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

  const tricepWorkouts = workoutList?.filter((workout) => workout.type === 'tricep');
  return (
    <main className='workouts'>
      {!tricepWorkouts
        ? <h3>Loading</h3>
        : tricepWorkouts?.map((workout, i) => {

          return <Card
            key={i}
            className='card'
            cover={ 
              <img
                className='workout-img'
                alt='Different type of tricep workouts'
                src={workout?.image}
              />
            }
          >
          <div>
            <p> <strong> {workout.name} </strong> </p>
            <p> <strong>How To: </strong> {workout.description} </p> 
            <p> <strong>Sets: </strong> {workout.sets} </p>
            <p> <strong>Reps: </strong> {workout.reps} </p>
          </div>  
          <Button 
              className='card-button'
              onClick={() => handleAdded(workout)}>
              Add to completed workouts
          </Button>
            </Card>
        })
      }
    </main>
  )


}

export default TricepWorkouts;