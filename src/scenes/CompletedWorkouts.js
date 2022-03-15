import { Button, Card } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../App.css"

function CompletedWorkouts() {
    const [completedWorkouts, setCompltedWorkouts] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/history')
            .then(response => response.json())
            .then((data) => setCompltedWorkouts(data))
            .catch(err => console.error(err))
    }, [])


    const navigate = useNavigate();


    const handleOnclick = () => {
        navigate('/')
    }

    return (
        <main className="completed-page">
                <h1 className="completed-header">Completed Workouts</h1>
                <Button className='buttonToGoHome' onClick={handleOnclick}> Back To Workouts</Button>
                <section className='completed-workouts'>
                {!completedWorkouts ? <h2>Loading...</h2>

                    : (
                        <ul className='completed-workout-ul'>
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
                        </ul>
                    )}
                    </section>
        </main>
    )
}

export default CompletedWorkouts;