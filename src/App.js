import { createContext, useEffect, useState } from 'react';
import SignUp from './scenes/SignUp';
import Login from './scenes/Login';
import WelcomePage from './scenes/Main';

export const WorkoutContext = createContext('');
function App() {
const [token, setToken] = useState();
const [isUser, setIsUser] = useState(false);
const [userId, setUserId] = useState();
console.log(userId)

// useEffect(() => {
//   const myToken = localStorage.getItem('token')
//   setToken(myToken)
// }, [])

  return (
    <section>
    {!token
      ? isUser
        ? <Login setIsUser={setIsUser} setToken={setToken} setUserId={setUserId}/>
        : <SignUp setIsUser={setIsUser} setToken={setToken}  setUserId={setUserId}/>
      : <WelcomePage userId={userId} token={token} setToken={setToken}/>
    }  
    </section>
  );
}

export default App;
