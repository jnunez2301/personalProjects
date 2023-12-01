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
          console.log("Called the API");
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
      setBodyPart(value.trim())
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

  return (
    <section className='routine-builder-container'>
      {infoError.length > 0 && 
      <h5>{infoError}</h5>
      }
      <form onSubmit={handleBuilderSubmit}>
        <header>
          <h5>Add Routine</h5>
          <label htmlFor="routine_name">Routine Name</label>
          <input
          onChange={onRoutineName}
           type="text" name="routine_name" id="routine_name" placeholder="Name your routine" required/>
           <label htmlFor="routine_description">Routine Description</label>
           <input 
           onChange={onRoutineDescription}
           type="text" name="routine_description" id="routine_description" placeholder="Describe your routine"/>

           <label htmlFor="uses_weights">With weights?</label>
           <input 
           onChange={onUsesWeights}
           type="checkbox" name="uses_weights" id="uses_weights" required/>
        </header>
        <div className="filter-body-part" 
        style={usesWeights.length > 0 ? {display: 'block'} : {display: 'none'}}
        >
          <header>
          <h5>Filter by Body Part</h5>
          </header>
          <label htmlFor="chest">Chest</label>
          <input
            onChange={onBodyPartChange}
          type="radio" name="body_part" id="chest" value={'Chest'}/>
          <label htmlFor="back">Back</label>
          <input
            onChange={onBodyPartChange}
          type="radio" name="body_part" id="back" value={'Back'}/>
          
          <label htmlFor="legs">Legs</label>
          <input
          onChange={onBodyPartChange}
          type="radio" name="body_part" id="legs" value={'Legs'} />
        </div>
        <div className="builder-exercises">
          {data.length > 0 &&
            data.map(e => (
              <React.Fragment key={e.exercise_id}>
                  <label htmlFor={e.exercise_name}>
                    <h5>{e.exercise_name}</h5>
                    <iframe src={e.youtubeSrc}></iframe>
                  </label>
                  <input type="checkbox"
                  onChange={onExerciseChange}
                   name={e.body_part}
                    id={e.exercise_name}
                   value={e.exercise_name}/>
              </React.Fragment>
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
