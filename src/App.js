import { useEffect, useState, createContext } from 'react';
import './App.css';
import { Button, PageHeader } from 'antd';

import GetWorkouts from './components/Workouts';
export const workoutContext = createContext('');


function App() {
  const [ workoutList, setWorkoutList ] = useState();
    useEffect(() => {
        //load data from API
        // fetch('https://gym-project-dc.uc.r.appspot.com')
        fetch('http://localhost:3001/workout')
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setWorkoutList(data)
          })
          .catch(err => console.error(err))
    }, []);
  return (
    <workoutContext.Provider value={{workoutList, setWorkoutList}}>
    <div>
    <PageHeader
    className="header"
    title="Fitness Guide"
   />
  
    <GetWorkouts /> 
    </div>

    </workoutContext.Provider>
  );
}

export default App;
