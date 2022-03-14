import React, { useContext } from 'react';
import { Card, Button } from 'antd'
import { workoutContext } from '../App';
import '../App.css'

function BicepWorkouts() {
  const { workoutList } = useContext(workoutContext)

  const handleAdded = (workout) => {
    console.log('clicked')
    console.log(workout)
      fetch('http://localhost:3001/history', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(workout)
      }).then(data => console.log(data))
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
          <div className='card-button'>
            <Button 
              onClick={() => handleAdded(workout)}>
                Add to completed workouts
            </Button>
          </div>
          </Card>
        })
      }
    </section>
  )


}

export default BicepWorkouts;