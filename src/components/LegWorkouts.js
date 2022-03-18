import React, { useContext } from 'react';
import { Card, Button } from 'antd'
import { WorkoutContext } from '../App';
import '../App.css'

function LegWorkouts({userId}) {
  const { workoutList  } = useContext(WorkoutContext)
  const handleAdded = (workout) => {
    fetch(`http://localhost:3001/history/${userId}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workout)
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
  
  
  const legWorkouts = workoutList?.filter((workout) => workout.type === 'leg');
  return (
    <section className='workouts'>
      {!legWorkouts
        ? <h3>Loading</h3>
        : legWorkouts?.map((workout, i) => {
          return <Card
            key={i}
            className='card'
            cover={
              <img
              className='workout-img'
              alt='Different types of leg workouts'
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
    </section>
  )


}

export default LegWorkouts;