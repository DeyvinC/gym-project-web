import { createContext, useEffect, useState } from 'react';
import SignUp from './scenes/SignUp';
import Login from './scenes/Login';
import WelcomePage from './scenes/Main';

export const WorkoutContext = createContext('');
function App() {
const [token, setToken] = useState();
const [isUser, setIsUser] = useState(false);
const [userId, setUserId] = useState();

  return (
    <section>
    {!token
      ? isUser
        ? <Login setIsUser={setIsUser} setToken={setToken} setUserId={setUserId}/>
        : <SignUp setIsUser={setIsUser} setToken={setToken}  setUserId={setUserId}/>
      : <WelcomePage userId={userId} token={token} setToken={setToken}/>
    }  
    <footer className='footer'> &copy; Body Geek 2022</footer>
    </section>
  );
}

export default App;
