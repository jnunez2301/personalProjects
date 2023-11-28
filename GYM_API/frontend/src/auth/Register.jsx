import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from "../context/auth/AuthContext";


export const Register = () => {
  const { isAuthenticated, user } = useAuth();
  const [inputValue, setInputValue] = useState('');
  const [ error, setError ] = useState('');
  const registerURL = '/api/auth/register';
  const navigate = useNavigate();
  const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  
  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value.trim() });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(regex.test(inputValue.user_handle)){
      setError('User name can only contain letters and numbers')
      return;
    }
    if(inputValue.password !== inputValue.confirm_password){
      setError('Passwords do not match!')
      return;
    }
    if(inputValue.password.length < 8 || !regex.test(inputValue.password)){
      setError('Your password must be at least 8 character long and have at least 1 symbol')
      return;
    }
    try {   
      console.log(inputValue);
      const response = await axios.post(registerURL, inputValue, { withCredentials: true });
      if(response.status === 201){
        alert('Registered successfully')
        navigate('/')
        window.location.reload();
      }
    } catch (error) {
      console.error(error.status);
      if(error.response.status === 401){
        setError('Please make sure all fields are filled correctly')
      }
      if(error.response.status === 500){
        setError('Username/Email already exists');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <hr />
      {
        error.length > 0 &&
        <div className="register-error">
          <h5>{error}</h5>
      </div>}
      <div className="label-container">
        <label htmlFor="user_handle">Username</label>
        <input
        onChange={onInputChange}
         type="text" name="user_handle" id="user_handle" required/>
      </div>
      <div className="label-container">
        <label htmlFor="first_name">First Name</label>
        <input
        onChange={onInputChange}
        type="text" name="first_name" id="first_name" required/>
      </div>
      <div className="label-container">
        <label htmlFor="last_name">Last Name</label>
        <input
        onChange={onInputChange}
         type="text" name="last_name" id="last_name" required/>
      </div>
      <div className="label-container">
        <label htmlFor="email_address">Email</label>
        <input 
        onChange={onInputChange} type="email" name="email_address" id="email_address" required/>
      </div>
      <div className="label-container">
        <label htmlFor="password">Password</label>
        <input 
        onChange={onInputChange} type="password" name="password" id="password" required/>
      </div>
      <div className="label-container">
        <label htmlFor="confirm_password">Confirm Password</label>
        <input 
        onChange={onInputChange} type="password" name="confirm_password" id="confirm_password" required/>
      </div>
      <button type="submit">Register</button>
      <p>Already have an user? <Link to={'/login'}>Sign in</Link></p>
    </form>
  )
}
