import { Pagination } from "../Navigation/Pagination";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useAuth } from "../../context/auth/AuthContext";
import { RoutineView } from "./RoutineView";

export const RoutineBuilder = () => {
    //TODO: ADD CHECKBOX WITH THE LIST
    // OF EXERCISES THAT ARE DISPLAYED
    // WHEN DONE JUST SUBMIT THE FORM
    // ON THE BACKEND IT WILL INSERT A
    // ROUTINE WITH THE USER_ID, USER_HANDLE, EXERCISES_ID
    const { isAuthenticated, user } = useAuth();
    const [data, setData] = useState([]);
    const [routineName, setRoutineName ] = useState('');
    const [routineDescription, setRoutineDescription] = useState('');
    const [routineImg, setRoutineImg] = useState('');
    const [newSets, setSets] = useState([]);
    const [newReps, setReps] = useState([]);
    const [newRest, setRest] = useState([]);
    const [usesWeights, setUseWeights] = useState('');
    const [infoError, setInfoError] = useState('');
    const [bodyPart, setBodyPart] = useState('');
    const [selectedExercise, setSelectedExercise] = useState([]);
    const baseURL = `/api/gym/exercises/${usesWeights}/${bodyPart}`;
    const [exerciseCheckedState, setExerciseCheckedState] = useState({});
    

    

    const [newRoutine, setNewRoutine] = useState([]);

    useEffect(() => {
      if(bodyPart.length > 0 && usesWeights.length > 0){
        axios
        .get(baseURL)
        .then(response => {
          setData(response.data)
        })
        .catch(error => console.log(error))
      }
    }, [bodyPart, usesWeights]);

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
        
      }else{
        setInfoError('Routine name must be longer than 10 characters')
      }
    }
    const onSetsChange = (event) => {
      const { name, value } = event.target;
      // Check if the array already includes the id
      const index = newSets.findIndex((item) => item.id === name);
      if (index !== -1) {
        // If the id is found, update the value
        const updatedSets = [...newSets];
        updatedSets[index] = { id: name, sets: value };
        setSets(updatedSets);
      } else {
        // If the id is not found, add a new entry
        setSets(newSets.concat({ id: name, sets: value }));
      }
    };

    const onRepsChange = (event) => {
      const { name, value } = event.target;
      // Check if the array already includes the id
      const index = newReps.findIndex((item) => item.id === name);
      if (index !== -1) {
        // If the id is found, update the value
        const updatedReps = [...newReps];
        updatedReps[index] = { id: name, reps: value };
        setReps(updatedReps);
      } else {
        // If the id is not found, add a new entry
        setReps(newReps.concat({ id: name, reps: value }));
      }
    };

    const onRestChange = (event) => {
      const { name, value } = event.target;
      // Check if the array already includes the id
      const index = newRest.findIndex((item) => item.id === name);
      if (index !== -1) {
        // If the id is found, update the value
        const updatedRest = [...newRest];
        updatedRest[index] = { id: name, rest: value };
        setRest(updatedRest);
      } else {
        // If the id is not found, add a new entry
        setRest(newRest.concat({ id: name, rest: value }));
      }
    };
    const onBodyPartChange = (event) =>{
      const { value } = event.target;
      setBodyPart(value.trim());
      
    }
    
    const onExerciseChange = (event) => {
      const { name, value, checked } = event.target;
    
      if (checked) {
        // Checkbox is checked, add the item to selectedExercise
        setSelectedExercise([...selectedExercise, { [name]: value }]);
    
        // Update the exerciseCheckedState for the current exercise
        setExerciseCheckedState((prev) => ({ ...prev, [value]: true }));
      } else {
        // Checkbox is unchecked, remove the item from selectedExercise
        const updatedSelectedExercise = selectedExercise.filter((item) => item[name] !== value);
        setSelectedExercise(updatedSelectedExercise);
    
        // Update the exerciseCheckedState for the current exercise
        setExerciseCheckedState((prev) => ({ ...prev, [value]: false }));
      }
    };
    
    const handleBuilderSubmit = (event) =>{
      event.preventDefault();

      const missingFields = [];

      // Check for missing fields by exercise_id
      selectedExercise.forEach((exercise) => {
        const exerciseId = Object.values(exercise)[0];

        const missingSet = newSets.find((set) => set.id === exerciseId) === undefined;
        const missingRep = newReps.find((rep) => rep.id === exerciseId) === undefined;
        const missingRest = newRest.find((rest) => rest.id === exerciseId) === undefined;

        if (missingSet || missingRep || missingRest) {
          missingFields.push(exerciseId);
        }
      });

      if (missingFields.length > 0) {
        const missingExercises = missingFields
          .map((exerciseId) => {
            const exerciseName = data.find((exercise) => exercise.exercise_id === exerciseId)?.exercise_name;
            return exerciseName ? `"${exerciseName}"` : `Exercise ID ${exerciseId}`;
          })
        .join(', ');
        setInfoError(`Make sure to choose the amount of sets, reps, and rest time for ${missingExercises}`);
        return;
      }
      if(missingFields.length === 0){
        setInfoError('');
      }
      

      if(selectedExercise.length < 1){
        setInfoError('You must choose at least 5 exercises');
        return;
      }
      if(newSets.length < 0){
        setInfoError('Make sure to choose the amount of sets on all exercises');
        return;
      }
      if(newReps.length <0){
        setInfoError('Make sure to choose the amount of reps on all exercises');
        return;
      }
      if(newRest.length < 0){
        setInfoError('Make sure to choose a rest time on all exercises');
        return
      }
      const organizeDataById = (exerciseIds, sets, reps, rest) => {
        const organizedData = {};
      
        // Initialize the organizedData object with empty arrays for each ID
        exerciseIds.forEach((id) => {
          organizedData[id] = { id, sets: [], reps: [], rest: [] };
        });
      
        // Populate the arrays in organizedData with the corresponding data
        sets.forEach((set) => {
          const { id, sets } = set;
          if (organizedData[id]) {
            organizedData[id].sets.push({ id, sets });
          }
        });
      
        reps.forEach((rep) => {
          const { id, reps } = rep;
          if (organizedData[id]) {
            organizedData[id].reps.push({ id, reps });
          }
        });
      
        rest.forEach((restItem) => {
          const { id, rest } = restItem;
          if (organizedData[id]) {
            organizedData[id].rest.push({ id, rest });
          }
        });
      
        // Convert the organizedData object to an array and filter out entries without any data
        const organizedArray = Object.values(organizedData).filter(
          (entry) => entry.sets.length > 0 || entry.reps.length > 0 || entry.rest.length > 0
        );
      
        return organizedArray;
      };
      
      const organizedDataArray = organizeDataById(
        selectedExercise.map((item) => item.id),
        newSets,
        newReps,
        newRest
      );
      
      const newArr = organizedDataArray.map(e => 
        {
          return {
            id: e.id,
            routine_name: routineName,
            routine_description: routineDescription,
            routine_img: routineImg,
            reps: e.reps[0].reps,
            rest: e.rest[0].rest,
            sets: e.sets[0].sets,
          }
        });
        setNewRoutine(newArr);
  }

  return (
    <section className='routine-builder-container'>
      {infoError.length > 0 && 
      <h5 className="info-error">
        {infoError}
      </h5>
      }
      <form 
      
      onSubmit={handleBuilderSubmit}>
          <div className="builder-header">
          <h5>Add Routine</h5>
          <label htmlFor="routine_name">Routine Name</label>
          <input
            onChange={onRoutineName}
           type="text" name="routine_name" id="routine_name" placeholder="Name your routine" required/>
           
           <label htmlFor="routine_description">Routine Description</label>
           <div>
           <textarea 
            maxLength={250}
           onChange={onRoutineDescription}
           type="text" name="routine_description" id="routine_description" placeholder="Describe your routine" required/>
           </div>

          <label htmlFor="routine_img">Routine Image</label>
          <input 
          onChange={onRoutineImg}
          type="url" name="routine_img" id="routine_img" 
          placeholder="Place your img URL"
          required/>
          </div>
          <div className="builder-search-bar">
            <div className="builder-uses-weights">
                <label htmlFor="uses_weights">With weights?</label>
                <input 
                onChange={onUsesWeights}
                type="checkbox" name="uses_weights" id="uses_weights"/>
            </div>
          <div className="filter-body-part" 
          style={usesWeights.length > 0 ? {opacity: '1'} : {opacity: '0'}}
          >
            <h5>Filter by Body Part</h5>
            <select onChange={onBodyPartChange} name="body_part" id="body_part" >
              <option value="chest">Chest</option>
              <option value="back">Back</option>
              <option value="legs">Legs</option>
              <option value="shoulders">Shoulders</option>
              <option value="biceps">Biceps</option>
              <option value="triceps">Triceps</option>
            </select>
          </div>
          <button type="submit">Show Routine</button>
        </div>
        <div className="builder-exercises"
        >
          {data.length > 0 &&
            data.map(e => (
              <div className="builder-exercise" 
              style={{ outline: exerciseCheckedState[e.exercise_id] ? '1px solid blue' : 'none' }}
              key={e.exercise_id}
              
              >
                <label  htmlFor={e.exercise_id} >
                    <h5 style={{fontSize: '18px', marginBottom: '.6rem'}}>{e.exercise_name}</h5>
                    <iframe src={e.youtubeSrc} allowFullScreen></iframe>
                  </label>
                  <input type="checkbox"
                  onChange={onExerciseChange}
                   name={'id'}
                    id={e.exercise_id}
                   value={e.exercise_id}
                   checked={exerciseCheckedState[e.exercise_id] || false}
                   />
                  <label htmlFor={`sets ${e.exercise_id}`}>Sets</label>
                  <select 
                  onChange={onSetsChange}
                  name={e.exercise_id} 
                  id={`sets ${e.exercise_id}`}
                  defaultValue={'DEFAULT'}
                   required>
                    <option value={'DEFAULT'} disabled>--Choose an option--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <label htmlFor={`reps ${e.exercise_id}`}>Reps</label>
                  <select
                  onChange={onRepsChange}
                   name={e.exercise_id} 
                   id={`reps ${e.exercise_id}`}
                   defaultValue={'DEFAULT'}
                   required>
                    <option value={'DEFAULT'} disabled>--Choose an option--</option>
                    <option value="8-12">8-12</option>
                    <option value="3-5">3-5</option>
                    <option value="10-15">10-15</option>
                  </select>

                  <label htmlFor={`rest ${e.exercise_id}`}>Rest time</label>
                  <select 
                  onChange={onRestChange}
                  name={e.exercise_id} 
                  id={`rest ${e.exercise_id}`}
                  defaultValue={'DEFAULT'}>
                    <option value={'DEFAULT'} disabled>--Choose an option--</option>
                    <option value="1-2 minutes">1-2 minutes</option>
                    <option value="3-5 minutes">3-5 minutes</option>
                  </select>
              </div>
            ))
          }
        </div>
        
      </form>
      {
        newRoutine.length > 0 &&  <RoutineView newRoutine={newRoutine} setInfoError={setInfoError}/>
      }
    </section>
  )
}
