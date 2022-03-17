import { Route, Routes } from 'react-router-dom';

import '../App.css';
import AllWorkouts from './AllWorkouts';
import CompletedWorkouts from './CompletedWorkouts';

function WelcomePage ({setToken, userId}) {
    return (
        <Routes>
             <Route path='/workouts' element={<AllWorkouts setToken={setToken} userId={userId}/>} />
            <Route path='/completed' element={<CompletedWorkouts userId={userId} />} />
        </Routes>
    )
}

export default WelcomePage;