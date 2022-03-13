
import React, { useContext } from "react";
import { Card, Button } from 'antd'
import { workoutContext } from '../App';
import '../App.css'

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
            <p> <strong> {workout.name} </strong> </p>
            <p> <strong>How To: </strong> {workout.description} </p> 
            <p> <strong>Sets: </strong> {workout.sets} </p>
            <p> <strong>Reps: </strong> {workout.reps} </p>
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