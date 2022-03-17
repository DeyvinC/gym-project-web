import { useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import '../App.css'

const salt = "$2b$10$e837LrHh7dAU9M0.ky74IO"

export default function SignUp({setToken, setIsUser, setUserId}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const hashedPassword = bcrypt.hashSync(password, salt)
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password: hashedPassword})
        })
        .then(response => response.json())
        .then(data => {
            setUserId(data.user)
            setToken(data.token);
            localStorage.setItem('token', data.token);
            navigate('/workouts')
        })
        .catch(err => alert(err))
    }

    return (
        <div>
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                <div>
                    <label> Email:
                        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                    </label>
                </div> 
                <div>
                    <label> Password:
                        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    </label> 
                </div>
                <div>
                    <input type="submit" value="Sign Up" />
                </div>
                </form>
                <div>
                <button onClick={() => setIsUser(true)}>
                Login 
                </button>
                </div>
            </div>
        </div>    
    )
}