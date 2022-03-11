import React, { useContext } from "react";
import { Card, Button } from 'antd'
import { workoutContext } from '../App';
import '../App.css'

const { Meta } = Card

function LegWorkouts() {

  const { workoutList } = useContext(workoutContext)
  const legWorkouts = workoutList?.filter((workout) => workout.type === 'leg');

  const handleAdded = (selectedWorkout) => {
      fetch('http://localhost:3001/history', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedWorkout)
      }).then(data => selectedWorkout(data))
      .catch(err => console.error(err))

  }


  return (
    <section className="workouts">
      {!legWorkouts
        ? <h3>Loading</h3>
        : legWorkouts?.map((workout, i) => {
          return <Card
            key={i}
            className="card"
            cover={
              <img
              className="workout-img"
              alt="example"
              src={workout?.image}
              // style={{width: "100%"}}
              />
            }
            >
            <Meta
              title={workout.name}
              description={workout.description}
            /> 
            <p>
              Sets: {workout.sets}
            </p>
            <p>
               Reps: {workout.reps}
            </p>
            <Button onClick={() => handleAdded(workout)} className="card-button">Add to completed workouts</Button>
          </Card>
        })
      }
    </section>
  )


}

export default LegWorkouts;