import React, { useContext } from 'react';
import { Card, Button } from 'antd'
import { WorkoutContext } from '../App';
import '../App.css'

function BicepWorkouts({userId}) {
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

  const bicepWorkouts = workoutList?.filter((workout) => workout.type === 'bicep');
  return (
    <section className='workouts'>
      {!bicepWorkouts
        ? <h3>Loading</h3>
        : bicepWorkouts?.map((workout, i) => {

          return <Card
            key={i}
            className='card'
            cover={
              <img
                className='workout-img'
                alt='Different types of bicep workouts'
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

export default BicepWorkouts;