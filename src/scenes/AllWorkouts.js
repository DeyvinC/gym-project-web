import React, { useState, useEffect, createContext } from 'react'

import { Button, PageHeader } from 'antd';
import ChestWorkouts from '../components/ChestWorkouts';
// import BackWorkouts from '../components/BackWorkouts';
// import BicepWorkouts from './../components/Bicep';
// import TricepWorkouts from './../components/Tricep';
// import LegWorkouts from './../components/Leg';
import { workoutContext } from '../App';
import BackWorkouts from '../components/BackWorkouts';
import BicepWorkouts from '../components/BicepWorkouts';
import TricepWorkouts from '../components/TricepWorkouts';
import LegWorkouts from '../components/LegWorkouts';

export default function AllWorkouts() {
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
    }, []);

    return (
        <div>

            <PageHeader
                className="header"
                title="Fitness Guide"
                extra={[
                    <Button onClick={() => {
                    }}>Completed Workouts</Button>
                ]}
            />
             <workoutContext.Provider value={{ workoutList, setWorkoutList }}> 
                <ChestWorkouts />
                <BackWorkouts/>
                <BicepWorkouts />
                <TricepWorkouts />
                <LegWorkouts />
            </workoutContext.Provider>
        </div>

    )
}
