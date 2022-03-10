import React, { useState, useEffect } from 'react'

import { Button, PageHeader } from 'antd';
import ChestWorkouts from '../components/ChestWorkouts';
import BackWorkouts from './../components/Back';
import BicepWorkouts from './../components/Bicep';
import TricepWorkouts from './../components/Tricep';
import LegWorkouts from './../components/Leg';

export default function AllWorkouts() {
    const [completed, setCompleted] = useState(false);
    const [home, setHome] = useState(true)
    const [workoutList, setWorkoutList] = useState();

    useEffect(() => {
        // fetch('https://gym-project-dc.uc.r.appspot.com')
        fetch(`http://localhost:3001/workout`)
            .then(response => response.json())
            .then(data => {
                data.sort((a,b) => {
                    if(a.type < b.type) {return -1}
                    if(a.type > b.type) {return 1}
                })
                setWorkoutList(data)
            })
            .catch(err => console.error(err))
    }, [completed]);

    return (
        <div>

            <PageHeader
                className="header"
                title="Fitness Guide"
                extra={[
                    <Button onClick={() => {
                        setCompleted(!completed)
                        setHome(!home)
                    }}>Completed Workouts</Button>
                ]}
            />

            <section className='workout-list'>
                {workoutList?.map(eachWorkout => {
                    
                    return (
                        <>
                            <ChestWorkouts eachWorkout={eachWorkout} />
                        </>
                    )
                })}

                <BicepWorkouts />
                <TricepWorkouts />
                <LegWorkouts /> 
            </section>
        </div>

    )
}
