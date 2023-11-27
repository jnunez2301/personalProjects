import axios from 'axios';
import {useState} from 'react';

export const Login = () => {
  const [inputValue, setInputValue] = useState('');
  const logURL = '/api/auth/login';

  const handleSubmit = (event)=>{
      event.preventDefault();
      axios
      .post(logURL, inputValue, { withCredentials: true })
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }
  const onInputChange = (event)=>{
    const { name, value}  = event.target;
    setInputValue({...inputValue, [name]: value.trim()})
  
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
      onChange={onInputChange}
      type="text" name="user_handle" id="user_handle" />
      <input 
      onChange={onInputChange}
      type="password" name="password" id="password" />
      <button type="submit">Log In</button>
    </form>
  )
}
