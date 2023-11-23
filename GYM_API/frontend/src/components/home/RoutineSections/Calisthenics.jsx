import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Calisthenics = () => {
  const baseUrl = '/api/gym/routines/0'
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get(baseUrl)
    .then(response => setData(response.data))
    .catch(error => console.log(error))
  },[])
  
  
  return (
    <section>
      {
        data && data.map(routine => (
          <div key={routine.routine_id}>
            <Link to={`/routine-name/calisthenics/${routine.routine_alias}`}>Go to routine</Link>
              <h2>{routine.routine_name}</h2>
              <img 
              width={'200px'} 
              src={routine.routine_img} alt={`${routine.routine_name}`} />
              <p>{routine.routine_description}</p>

          </div>
        ))
      }
    </section>
  )
}
