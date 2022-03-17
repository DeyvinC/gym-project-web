import { useState} from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";


const salt = "$2b$10$e837LrHh7dAU9M0.ky74IO"

export default function Login({setToken, setIsUser, setUserId}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const hashedPassword = bcrypt.hashSync(password, salt)
        fetch("http://localhost:3001/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password: hashedPassword})
        })
      
        .then(response => response.json())
        .then(data => {
            setUserId(data.user[0].id)
            setToken(data.token);
            localStorage.setItem('token', data.token);
            navigate('/workouts')

        })
        .catch(err => alert(err))
    }

    return (
        <>
        <h1> Login </h1>
        <form onSubmit={handleSubmit} >
            <label> Email:
                <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
            </label> <br />
            <label> Password: 
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </label> <br />
                <input type="submit" value="Login"/>
        </form> <br />
        <button onClick={() => setIsUser(false)}>
            Sign Up
        </button>
        </>
    )
}