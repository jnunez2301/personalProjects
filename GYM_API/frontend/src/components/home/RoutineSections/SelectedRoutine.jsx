    import { useEffect, useState } from 'react';
    import { useParams } from 'react-router-dom'
    import axios from 'axios';
    export const SelectedRoutine = () => {
        const { type, name } = useParams();
        const baseURL = `/api/gym/routine/${type}/${name}`
        const [data, setData] = useState([]);
        useEffect(() => {
            axios
                .get(baseURL)
                .then(response => setData(response.data))
                .catch(error => console.log(error))
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        /* const chestExercises = data.filter(d => d.body_part === 'Chest'); */
        const routineInfo = data.length > 0 ? [data[0]] : [];

        return (
            <section className='routine-container'>
                {routineInfo.length > 0 && routineInfo.map(info => (
                    <div className='routine-header' key={info.user_id}>
                        <h2>{info.routine_name}</h2>
                        <h5>{info.body_part}</h5>
                        <p>{info.routine_description}</p>
                        <img width={'200px'} src={info.routine_img} alt={info.routine_name} />
                    </div>
                ))}
                <table className='exercise-table' >
                    <thead>
                        <tr>
                            <td>Exercise Name</td>
                            <td>Description</td>
                            <td>Video Reference</td>
                        </tr>
                    </thead>
                    {
                        data.length > 0 && data.map(exercise => (

                            <tbody key={exercise.exercise_id}>
                                <tr>
                                    <td>{exercise.exercise_name}</td>
                                    <td>{exercise.description}</td>
                                    <td><a href={exercise.youtubeSrc} target='_blank' rel="noreferrer" >Video</a></td>
                                </tr>
                            </tbody>

                        ))

                    }</table>
            </section>
        )
    }
