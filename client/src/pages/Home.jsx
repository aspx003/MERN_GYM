import { useEffect, useState } from "react"
import axios from "axios";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            axios.get('/api/workouts/')
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }

        fetchWorkouts();
    }, []);

    return (
        <div className="home">
            <div className="workouts">
                {workouts &&
                    workouts.map((workout) => (
                        <p key={workout._id}>{workout.title}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Home