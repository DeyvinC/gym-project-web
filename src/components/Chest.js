import React, { useContext } from "react";
import { Card } from 'antd'
import { workoutContext } from '../App';
import '../App.css'

const { Meta } = Card

function GetWorkouts() {

  const { workoutList } = useContext(workoutContext)
  const chestWorkouts = workoutList?.filter((workout) => workout.type === 'chest');
  return (
    <section className="workouts">
      {!chestWorkouts
        ? <h3>Loading</h3>
        : chestWorkouts?.map((workout, i) => {

          return <Card
            key={i}
            className="chestCard"
            style={{ width: 300 }}
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
          </Card>
        })
      }
    </section>
  )


}

export default GetWorkouts;