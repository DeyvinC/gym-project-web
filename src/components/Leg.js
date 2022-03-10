import React, { useContext } from "react";
import { Card, Button } from 'antd'
import { workoutContext } from '../App';
import '../App.css'

const { Meta } = Card

function LegWorkouts() {

  const { workoutList } = useContext(workoutContext)
  const legWorkouts = workoutList?.filter((workout) => workout.type === 'leg');
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

export default LegWorkouts;