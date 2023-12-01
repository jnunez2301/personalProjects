import axios from 'axios';
import { useEffect, useState } from "react";
import { Pagination } from '../Navigation/Pagination';

// DONT FORGET TO ADD FILTER

export const Exercises = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  

  const baseURL = '/api/gym/exercises'
  useEffect(() =>{
    axios
    .get(baseURL)
    .then(response => 
      setData(response.data))
    .catch(error => console.log(error))
  }, [])

  


  // Pagination
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  
  const onHandleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const newData = data.filter(d => d.exercise_name.toLowerCase().includes(searchTerm) || d.body_part.toLowerCase().includes(searchTerm))
    setFilteredData(newData);
  }


  return (
    <section className='exercise-main-container'>
      
    
    <input
    className='search-bar'
     onChange={onHandleSearch}
     type="search" placeholder='Search by body part or exercise name'/>
    
    <div className='exercise-container'>
    
    {filteredData.length  > 0 ?
    <>
    {filteredData.slice(firstPostIndex, lastPostIndex).map(exercise => (
      <div className='exercise-card-container' key={exercise.exercise_id}>
      <header className='exercise-title'>
        <h2 className='exercise-name'>{exercise.exercise_name}</h2>
        <hr />
        <p>
        Body Part:
        <span className='body-part'>  {exercise.body_part} </span>
        </p>
      </header>
      
     
      <iframe src={exercise.youtubeSrc} 
        allowFullScreen></iframe>

      <div className='exercise-description'>
        
        <p>{exercise.description}</p> 
      </div>
      <div className='exercise-difficulty'>
        <div className='difficulty'
        style={{
          width: `${exercise.difficulty * 20}%`}}
          >{exercise.difficulty * 20}%</div>
      </div>
    </div>   
    ))}
    </>
     : 
     <>
    {currentPosts.map(exercise => (
      <div className='exercise-card-container' key={exercise.exercise_id}>
        <header className='exercise-title'>
          <h2 className='exercise-name'>{exercise.exercise_name}</h2>
          <hr />
          <p>
          Body Part:
          <span className='body-part'>  {exercise.body_part} </span>
          </p>
        </header>
        <iframe src={exercise.youtubeSrc} 
        allowFullScreen></iframe>

        <div className='exercise-description'>
          
          <p>{exercise.description}</p> 
        </div>
        <div className='exercise-difficulty'>
          <h3 style={{color: 'orangered'}}>Difficulty</h3>
          <div className='difficulty'
          style={{
            width: `${exercise.difficulty * 20}%`}}
            >{exercise.difficulty * 20}%</div>
        </div>
      </div>
    ))}
    
    </>
    }
    </div>
    <Pagination
                totalPosts={filteredData.length || data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
    </section>

  )
}
