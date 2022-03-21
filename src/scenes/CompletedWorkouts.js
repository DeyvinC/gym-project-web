import { Button, Card } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/completedWorkouts.css"

function CompletedWorkouts({userId}) {
    const [completedWorkouts, setCompltedWorkouts] = useState([]);
    
    useEffect(() => {
        fetch(`https://gym-project-dc.uc.r.appspot.com/history/${userId}`)
            .then(response => response.json())
            .then((data) => setCompltedWorkouts(data))
            .catch(err => console.error(err))
    }, [ userId])

    const navigate = useNavigate();


    const handleOnclick = () => {
        navigate('/workouts')
    }

    return (
        <div className="completed-page">
                <h1 className="completed-header">Completed Workouts</h1>
                <Button className='buttonToGoHome' onClick={handleOnclick}> Back To Workouts</Button>
                <section className='completed-workouts'>
                {!completedWorkouts ? <h2>Loading...</h2>

                    : (
                        <>
                            {completedWorkouts.map((workout, i) => {
                                return (
                                    <Card
                                        key={i}
                                        className="completed-card"
                                        cover={
                                            <img
                                                className="workout-img"
                                                alt="example"
                                                src={workout?.image}
                                            />
                                        }
                                    >
                                        <div>
                                            <p> <strong> {workout.name} </strong> </p>
                                            <p> <strong>How To: </strong> {workout.description} </p>
                                            <p> <strong>Sets: </strong> {workout.sets} </p>
                                            <p> <strong>Reps: </strong> {workout.reps} </p>
                                            <p> <strong>Completed on: </strong> {(Date(workout.timestamp._seconds).slice(0, 15))} 
                                                
                                            </p>
                                        </div>
                                    </Card>
                                )
                            })}
                        </>
                    )}
                    </section>
        </div>
    )
}

export default CompletedWorkouts;