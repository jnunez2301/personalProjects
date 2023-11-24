import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Calisthenics = () => {
  const baseUrl = 'https://gymapi23.onrender.com/api/gym/routines/0'
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get(baseUrl)
    .then(response => setData(response.data))
    .catch(error => console.log(error))
  },[])
  
  
  return (
    <section className="routines">
      {
        data && data.map(routine => (
          <Link 
          
          className='routine-link'          
          to={`/routine-name/0/${routine.routine_alias}`} key={routine.routine_id}>
              <h2>{routine.routine_name}</h2>
              <img 
              src={routine.routine_img} alt={`${routine.routine_name}`} />
              <p>{routine.routine_description}</p>

          </Link>
        ))
      }
    </section>
  )
}
