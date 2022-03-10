
import React, { useContext } from "react";
import { Card, Button } from 'antd'
import { workoutContext } from '../App';
import '../App.css'

const { Meta } = Card

function BackWorkouts() {

  const { workoutList } = useContext(workoutContext)
  const BackWorkouts = workoutList?.filter((workout) => workout.type === 'back');
  return (
    <section className="workouts">
      {!BackWorkouts
        ? <h3>Loading</h3>
        : BackWorkouts?.map((workout, i) => {

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

export default BackWorkouts;