import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllWorkouts from './scenes/AllWorkouts';

import CompletedWorkouts from './scenes/CompletedWorkouts';

export const workoutContext = createContext('');

function App() {

  // const [completed, setCompleted] = useState(false);
  // const [home, setHome] = useState(true)

  return (
    // <workoutContext.Provider value={{ workoutList, setWorkoutList }}>

    <Routes>
      <Route path='/' element={<AllWorkouts />} />
      <Route path='/completed' element={<CompletedWorkouts />} />
    </Routes>
    // </workoutContext.Provider>
  );
}

export default App;
