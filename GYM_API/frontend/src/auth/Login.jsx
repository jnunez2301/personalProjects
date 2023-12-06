import axios from 'axios';
import { useState, useEffect } from 'react';
import useForm from './hooks/UseForm';
import { useAuth } from '../context/auth/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [inputValue, setInputValue] = useState('');
  const [ error, setError ] = useState('');
  const { moveLabel } = useForm();
  const logURL = '/api/auth/login';
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      
      const response = await axios.post(logURL, inputValue, { withCredentials: true });
      if(response.status === 200){
        navigate('/')
        window.location.reload();
      }
    } catch (error) {
      console.error(error.status);
      if(error.response.status === 401){
        setError('Please enter a valid username or password')
      }
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value.trim() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <hr />
      {
        error.length > 0 &&
        <div className="register-error">
          <h5>{error}</h5>
      </div>}
      <div className='label-container'>
        <label onClick={moveLabel} htmlFor='user_handle'>
          Username
        </label>
        <input
          onChange={onInputChange}
          type='text'
          name='user_handle'
          id='user_handle'
          placeholder='Username or email'
          required
        />
      </div>
      <div className='label-container'>
        <label onClick={moveLabel} htmlFor='password'>
          Password
        </label>
        <input
          onChange={onInputChange}
          type='password'
          name='password'
          id='password'
          placeholder='Your password'
          required
        />
      </div>
      <button type='submit'>Log In</button>
      <p>Don&apos;t have an account? <Link to={'/register'}>Register</Link></p>
    </form>
  );
};
