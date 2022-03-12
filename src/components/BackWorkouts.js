
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
                className="workout-img"
                alt="example"
                src={workout?.image}
                style={{width: "100%"}}
              />
            }
          >
         <div>
            <p> {workout.name} </p>
            <p> {workout.description} </p> 
            <p> Sets: {workout.sets} </p>
            <p> Reps: {workout.reps}</p>
          </div>
          <div className="card-button">
              <Button>Add to completed workouts</Button>
          </div>
          </Card>
        })
      }
    </section>
  )


}

export default BackWorkouts;