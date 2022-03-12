import { Button } from "antd";
import { useNavigate } from "react-router-dom"
import "../App.css"

function CompletedWorkouts() {
    
    const navigate = useNavigate();


    const handleOnclick = () => {
        navigate('/')
    }

    return (
        <>
        <h1>Completed Workouts</h1>
        <Button onClick={handleOnclick}> Back To Workouts</Button>
        </>
    )
}

export default CompletedWorkouts;