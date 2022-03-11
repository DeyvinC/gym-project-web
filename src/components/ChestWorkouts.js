import React, { useContext } from "react";
import { Card, Button } from 'antd'
import { workoutContext } from '../App';
import '../App.css'

const { Meta } = Card

function ChestWorkouts() {

  const { workoutList } = useContext(workoutContext)
  const ChestWorkouts = workoutList?.filter((workout) => workout.type === 'chest');
  return (
    <section className="workouts">
      {!ChestWorkouts
        ? <h3>Loading</h3>
        : ChestWorkouts?.map((workout, i) => {

          return <Card
            key={i}
            className="card"
            cover={
              <img
                className="workout-img"
                alt="example"
                src={workout?.image}
                style={{width: "100%"}}
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
            <Button>Add to completed workouts</Button>
          </Card>
        })
      }
    </section>
  )


}

export default ChestWorkouts;