import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { usePDF } from 'react-to-pdf';

export const SelectedRoutine = () => {
    const { type, name } = useParams();
    const baseURL = `https://gymapi23.onrender.com/api/gym/routine/${type}/${name}`
    const [data, setData] = useState([]);
    const uniqueBodyParts = new Set();

    const filteredExercises = data.reduce((result, exercise) => {
        if (!uniqueBodyParts.has(exercise.body_part)) {
            uniqueBodyParts.add(exercise.body_part);
            result.push(exercise);
        }
        return result;
    }, []);

    const routineInfo = data.length > 0 ? [filteredExercises[0]] : [];

    const { toPDF, targetRef } = usePDF({
        filename: `${Date.now()}.pdf`});


    useEffect(() => {
        axios
            .get(baseURL)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    /* const chestExercises = data.filter(d => d.body_part === 'Chest'); */
    
    return (
        <section className='selected-routine'>
            <div className='btn-container'>
                <button className='btn-download' onClick={() => toPDF()}>Download PDF</button>
            </div>
            <section ref={targetRef} className='routine-container'>
                {routineInfo.length > 0 && routineInfo.map(info => (
                    <div className='routine-header' key={info.user_id}>
                        <div style={{marginBottom: '.5rem'}}>
                            <h2>{info.routine_name}</h2>
                            <hr />
                        </div>
                        <h5>
                            <ul
                                style={{ display: 'flex', gap: '8px', color: 'rgb(255, 0, 200)' }}
                            >
                                {filteredExercises.map(exercise =>

                                    <li key={exercise.body_part}>
                                        {exercise.body_part}
                                    </li>
                                )}
                            </ul>
                        </h5>
                       
                            <img 
                            className='routine-img'
                            src={info.routine_img} alt={info.routine_name} />
                       
                        <p
                        >{info.routine_description}</p>
                    </div>
                ))}
                <table className='exercise-table' >
                    <thead>
                        <tr>
                            <td>Exercise Name</td>
                            <td>Description</td>
                            <td>Sets</td>
                            <td>Reps</td>
                            <td>Rest</td>
                        </tr>
                    </thead>
                    {
                        data.length > 0 && data.map(exercise => (

                            <tbody key={exercise.exercise_id}>
                                <tr>
                                    <td>
                                    <a 
                                    href={exercise.youtubeSrc} target='_blank' rel="noreferrer" >{exercise.exercise_name}</a>
                                    </td>
                                    <td
                                    style={{
                                        width: '10ch'
                                    }}
                                    >{exercise.description}</td>
                                    <td>{exercise.sets}</td>
                                    <td>{exercise.reps}</td>
                                    <td>{exercise.rest}</td>
                                </tr>
                            </tbody>

                        ))

                    }</table>
            </section>
        </section>
    )
}
