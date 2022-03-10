import React, { useContext } from "react";
import { Button, Card } from 'antd'
import '../App.css'

const { Meta } = Card

function ChestWorkouts({eachWorkout}) {
  console.log(eachWorkout)
  return (
    <section className="workouts">
       <Card
        className="card"
        cover={
          <img

            alt="example"
            src={eachWorkout.image}
            style={{ width: "100%" }}
          />
        }>
        <Meta title={eachWorkout.name} description={eachWorkout.description} />
        <p>
          Sets: {eachWorkout.sets}
        </p>
        <p>
          Reps: {eachWorkout.reps}
        </p>
       <Button>Add to completed workouts</Button>
      </Card> 
    </section>
  )


}

export default ChestWorkouts;