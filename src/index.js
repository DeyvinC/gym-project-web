import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { WorkoutContext } from './App';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Link path='/' element={<WorkoutList/>} />
      <Link path='/lol' element={<CompletedWorkouts/>} />  */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


