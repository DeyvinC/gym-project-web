import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllWorkouts from './scenes/AllWorkouts';

import CompletedWorkouts from './scenes/CompletedWorkouts';

export const workoutContext = createContext('');
function App() {

  return (
    <Routes>
      <Route path='/' element={<AllWorkouts />} />
      <Route path='/completed' element={<CompletedWorkouts />} />
    </Routes>
  );
}

export default App;
