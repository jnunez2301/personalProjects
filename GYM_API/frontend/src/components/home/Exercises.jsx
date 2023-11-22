import axios from 'axios';
import { useEffect, useState } from "react";
import { Pagination } from '../Navigation/Pagination';
export const Exercises = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  
  const baseURL = 'api/gym/exercises'
  useEffect(() =>{
    axios
    .get(baseURL)
    .then(response => 
      setData(response.data))
    .catch(error => console.log(error))
  }, [])

  const onHandleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const newData = data.filter(d => d.exercise_name.toLowerCase().includes(searchTerm) || d.body_part.toLowerCase().includes(searchTerm))
    setFilteredData(newData)
    
  }


  // Pagination
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  


  return (
    <section className='exercise-main-container'>
      
    <input
    className='search-bar'
     onChange={onHandleSearch}
     type="search" placeholder='Search by body part or exercise name'/>
    <div className='exercise-container'>
    
    {filteredData.length  > 0 ?
    <>
    {filteredData.map(exercise => (
      <div className='exercise-card-container' key={exercise.exercise_id}>
      <header className='exercise-title'>
        <h2 className='exercise-name'>{exercise.exercise_name}</h2>
        <hr />
        <p>
        Body Part:
        <span className='body-part'>  {exercise.body_part} </span>
        </p>
      </header>
      
      
      <iframe src={exercise.youtubeSrc} ></iframe>

      <div className='exercise-description'>
        
        <p>{exercise.description}</p> 
      </div>
      <div className='exercise-difficulty'>
        <div className='difficulty'
        style={{
          width: `${exercise.difficulty * 20}%`}}
          >{exercise.difficulty}</div>
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
        <iframe src={exercise.youtubeSrc} ></iframe>

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
    }
    </div>
    <Pagination
                totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
    </section>

  )
}
