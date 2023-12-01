import { Pagination } from "../Navigation/Pagination";
import React, { useEffect, useState } from "react";
import axios from 'axios';

export const RoutineBuilder = () => {
    //TODO: ADD CHECKBOX WITH THE LIST
    // OF EXERCISES THAT ARE DISPLAYED
    // WHEN DONE JUST SUBMIT THE FORM
    // ON THE BACKEND IT WILL INSERT A
    // ROUTINE WITH THE USER_ID, USER_HANDLE, EXERCISES_ID
    
    const [data, setData] = useState([]);
    const [routineData, setRoutineData] = useState([]);
    const [routineName, setRoutineName ] = useState('');
    const [routineDescription, setRoutineDescription] = useState('');
    const [routineImg, setRoutineImg] = useState('');
    const [usesWeights, setUseWeights] = useState('');
    const [infoError, setInfoError] = useState('');
    const [bodyPart, setBodyPart] = useState('');
    const [selectedExercise, setSelectedExercise] = useState([]);
    const baseURL = `/api/gym/exercises/${usesWeights}/${bodyPart}`

    useEffect(() => {
      if(bodyPart.length > 0 && usesWeights.length > 0){
        
        axios
        .get(baseURL)
        .then(response => {
          setData(response.data)
        })
        .catch(error => console.log(error))
      }
    }, [bodyPart, usesWeights])
    const onUsesWeights = (event) => {
      const {checked} = event.target;
      if(checked){
        setUseWeights('1')
      }else{
        setUseWeights('0')
      }
    }
    
    const onRoutineName = (event) =>{
      const newRoutineName = event.target.value;
      if(newRoutineName.length > 5){
        setRoutineName(newRoutineName.trim());
        setInfoError('')
      }else{
        setInfoError('Routine name must be longer than 5 characters')
      }
    }
    const onRoutineImg = (event) =>{
      const newRoutineImg = event.target.value;
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      if(urlRegex.test(newRoutineImg)){
        setRoutineImg(newRoutineImg.trim());
        setInfoError('')
      }else{
        setInfoError('You must add an URL as an IMG')
      }
    }
    const onRoutineDescription = (event) =>{
      const newRoutineDescription = event.target.value;
      if(newRoutineDescription.length > 10){
        setRoutineDescription(newRoutineDescription.trim());
        setInfoError('')
      }else{
        setInfoError('Routine name must be longer than 10 characters')
      }
    }
    const onBodyPartChange = (event) =>{
      const { value } = event.target;
      setBodyPart(value.trim());
    }
    const onExerciseChange = (event) => {
      const { name, value, checked } = event.target;
      if (checked) {
        // Checkbox is checked, add the item to selectedExercise
        setSelectedExercise([...selectedExercise, { [name]: value }]);
      } else {
        // Checkbox is unchecked, remove the item from selectedExercise
        const updatedSelectedExercise = selectedExercise.filter(item => item[name] !== value);
        setSelectedExercise(updatedSelectedExercise);
      }
    }
    const handleBuilderSubmit = (event) =>{
        event.preventDefault();
        console.log('Routine posted');
    }

    console.log(selectedExercise);

  return (
    <section className='routine-builder-container'>
      {infoError.length > 0 && 
      <h5 className="info-error">
        {infoError}
      </h5>
      }
      <form 
      style={{padding: 0}}
      onSubmit={handleBuilderSubmit}>
        
          <h5>Add Routine</h5>
          <label htmlFor="routine_name">Routine Name</label>
          <input
            onChange={onRoutineName}
           type="text" name="routine_name" id="routine_name" placeholder="Name your routine" required/>
           
           <label htmlFor="routine_description">Routine Description</label>
           <input 
           onChange={onRoutineDescription}
           type="text" name="routine_description" id="routine_description" placeholder="Describe your routine" required/>

          <label htmlFor="routine_img">Routine Image</label>
          <input 
          onChange={onRoutineImg}
          type="url" name="routine_img" id="routine_img" 
          placeholder="Place your img URL"
          required/>
          <div className="builder-search-bar">
            <div className="builder-uses-weights">
                <label htmlFor="uses_weights">With weights?</label>
                <input 
                onChange={onUsesWeights}
                type="checkbox" name="uses_weights" id="uses_weights" required/>
            </div>
          <div className="filter-body-part" 
          style={usesWeights.length > 0 ? {display: 'block'} : {display: 'none'}}
          >
            <h5>Filter by Body Part</h5>
            <select onChange={onBodyPartChange} name="body_part" id="body_part">
              <option value="chest">Chest</option>
              <option value="back">Back</option>
              <option value="legs">Legs</option>
              <option value="shoulders">Shoulders</option>
              <option value="biceps">Biceps</option>
              <option value="triceps">Triceps</option>
            </select>
          </div>
        </div>
        <div className="builder-exercises">
          {data.length > 0 &&
            data.map(e => (
              <div className="builder-exercise" key={e.exercise_id}>
                  <input type="checkbox"
                  onChange={onExerciseChange}
                   name={e.body_part}
                    id={e.exercise_id}
                   value={e.exercise_name}/>
                  <label htmlFor={e.exercise_id}>
                    <h5>{e.exercise_name}</h5>
                    <iframe src={e.youtubeSrc} allowFullScreen></iframe>
                  </label>
                  
                  
              </div>
            ))
          }
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        This is how your routine will look like

      </div>
    </section>
  )
}
