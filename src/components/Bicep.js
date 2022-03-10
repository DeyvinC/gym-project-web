import React, { useContext } from "react";
import { Card, Button } from 'antd'
import { workoutContext } from '../App';
import '../App.css'

const { Meta } = Card

function BicepWorkouts() {

  const { workoutList } = useContext(workoutContext)
  const bicepWorkouts = workoutList?.filter((workout) => workout.type === 'bicep');
  return (
    <section className="workouts">
      {!bicepWorkouts
        ? <h3>Loading</h3>
        : bicepWorkouts?.map((workout, i) => {

          return <Card
            key={i}
            className="card"
            cover={
              <img
                
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

export default BicepWorkouts;