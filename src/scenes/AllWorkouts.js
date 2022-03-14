import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import ChestWorkouts from '../components/ChestWorkouts';
import BackWorkouts from '../components/BackWorkouts';
import BicepWorkouts from '../components/BicepWorkouts';
import TricepWorkouts from '../components/TricepWorkouts';
import LegWorkouts from '../components/LegWorkouts';

import { workoutContext } from '../App';

export default function AllWorkouts() {
    const [workoutList, setWorkoutList] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://gym-project-dc.uc.r.appspot.com/workout')
            .then(response => response.json())
            .then(data => {
                data.sort((a,b) => {
                    if(a.type < b.type) {return -1}
                    if(a.type > b.type) {return 1}
                })
                setWorkoutList(data)
                console.log(setWorkoutList)
            })
            .catch(err => console.error(err))
    }, []);



    const handleOnclick = () => {
        navigate('/completed')
    }

    return (
        <main>
            <section className='hero-img'>
                <h1 className='header'>Body Geek</h1>
                <button  className='completedWorkoutBtn' onClick={handleOnclick}>Completed Workouts</button>
            </section>
            
                
                
             <workoutContext.Provider value={{ workoutList, setWorkoutList }}> 
                <h2 className='h2' >Chest</h2>
                <ChestWorkouts />
                <h2 className='h2' >Back</h2>
                <BackWorkouts/>
                <h2 className='h2' >Biceps</h2>
                <BicepWorkouts />
                <h2 className='h2' >Triceps</h2>
                <TricepWorkouts />
                <h2 className='h2' >Legs</h2>
                <LegWorkouts />   
            </workoutContext.Provider>
        </main>

    )
}
