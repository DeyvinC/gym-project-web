import React, { useContext } from "react";
import { Card } from 'antd'
import { workoutContext } from '../App';
import '../App.css'

const { Meta } = Card

function GetBackWorkouts() {

  const { workoutList } = useContext(workoutContext)
  const backWorkouts = workoutList?.filter((workout) => workout.type === 'back');
  return (
    <section className="workouts">
      {!backWorkouts
        ? <h3>Loading</h3>
        : backWorkouts?.map((workout, i) => {

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

export default GetBackWorkouts;