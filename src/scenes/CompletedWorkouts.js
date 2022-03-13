import { Button } from "antd";
import { useNavigate } from "react-router-dom"
import "../App.css"

function CompletedWorkouts() {
    
    const navigate = useNavigate();


    const handleOnclick = () => {
        navigate('/')
    }

    return (
        <section className="completed-page">
        <h1 className="completed-header">Completed Workouts</h1>
        <Button onClick={handleOnclick}> Back To Workouts</Button>
        </section>
    )
}

export default CompletedWorkouts;