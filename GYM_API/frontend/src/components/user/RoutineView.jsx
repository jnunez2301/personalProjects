/* eslint-disable react/prop-types */
import { useAuth } from "../../context/auth/AuthContext";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RoutineView = ({ newRoutine, setInfoError }) => {
    const {isAunthenticated, user} = useAuth();
    const [ postRoutine, setPostRoutine ] = useState([]);
    const [ exercisesData, setExercisesData ]= useState([]);
    const uniqueBodyParts = new Set();
    const navigate = useNavigate();
    
    const filteredExercises = exercisesData.reduce((result, exercise) => {
        if (!uniqueBodyParts.has(exercise.body_part)) {
            uniqueBodyParts.add(exercise.body_part);
            result.push(exercise);
        }
        return result;
    }, []);

    const bodyPartSections = Array.from(uniqueBodyParts);

    useEffect(() => {
            axios
            .get('/api/gym/exercises')
            .then(response => {
                const filteredExercises = response.data.filter(e =>
                    newRoutine.map(n => parseInt(n.id)).includes(e.exercise_id)
                );
            
                const exercisesWithInfo = filteredExercises.map(exercise => {
                    const matchingRoutine = newRoutine.find(n => parseInt(n.id) === exercise.exercise_id);
                    return {
                        ...exercise,
                        routine_name: matchingRoutine.routine_name,
                        routine_description: matchingRoutine.routine_description,
                        routine_img: matchingRoutine.routine_img,
                        sets: matchingRoutine.sets,
                        reps: matchingRoutine.reps,
                        rest: matchingRoutine.rest,
                    };
                });
            
                setExercisesData(exercisesWithInfo);
            })
            .catch(error => {
                console.log(error)
              
            })
    }, [newRoutine])
   
    
    const handlePostRoutine = () =>{
        
        const words = exercisesData[0].routine_name.split(' ');
        const initials = words.map(word => word.charAt(0).toUpperCase());
        const routine_alias = initials.join(''); 
        if(window.confirm('Are you sure you want to post your routine?')){
            axios
            .post(`/api/gym/new-routine/${user.user_id}`, exercisesData)
            .then(response => {
                setPostRoutine(response.data)
                if(response.status === 201){
                    navigate(`/user/routine-builder/success/${routine_alias}/${user.user_id}`);
                }
            })
            
            .catch(error =>{
                 setInfoError(error.response.data.msg)
                 console.log(error);
                })
        }
      }
      
      
      return (
        <section className='routine-view-container'>
            
            <div className="routine-view">
            <button className="btn-post-view" onClick={handlePostRoutine}>POST IT</button>
                {
                    newRoutine.length > 0  &&
                    <>
                    <h2>{newRoutine[0].routine_name}</h2>
                    <hr />
                    <img
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "https://media.tenor.com/Rc1GWDr71WIAAAAC/psyduck.gif";
                    }}
                    className="routine-view-img" src={newRoutine[0].routine_img} alt={newRoutine[0].routine_name + 'img'} />
                    <p>
                        {newRoutine[0].routine_description}
                    </p>
                    </>
                }            
            {bodyPartSections.map((bodyPart) => (
                    <div key={bodyPart} className='routine-section'>
                        <div>
                            <h2>{bodyPart}</h2>
                            <hr />
                        </div>
                        <table className='exercise-table'>
                            <thead>
                                <tr>
                                    <td>Exercise Name</td>
                                    <td className='routine-description' style={{textAlign: 'center'}}>Description</td>
                                    <td>Sets</td>
                                    <td>Reps</td>
                                    <td>Rest</td>
                                </tr>
                            </thead>
                            <tbody>
                                {exercisesData
                                    .filter((exercise) => exercise.body_part === bodyPart)
                                    .map((exercise) => (
                                        <tr key={exercise.exercise_id}>
                                            <td>
                                                <a
                                                    href={exercise.youtubeSrc}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                >
                                                    {exercise.exercise_name}
                                                </a>
                                            </td>
                                            <td
                                            className='routine-description' style={{ width: '10ch' }}>{exercise.description}</td>
                                            <td>{exercise.sets}</td>
                                            <td>{exercise.reps}</td>
                                            <td>{exercise.rest}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </section>
    );
}
