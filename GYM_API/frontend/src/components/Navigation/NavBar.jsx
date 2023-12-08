import { useLocation, useNavigate } from 'react-router-dom'
import './NavBar.component.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import axios from 'axios'
import { useState, useEffect } from 'react';

const NavBar = () => {
 
  const { isAuthenticated, user} = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const logoutURL = '/api/auth/logout';
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogOut = async () => {
    try {
      const response = await axios.get(logoutURL, {withCredentials: true});
      if (response.status === 200) {
        alert('Logout successful');
        navigate('/');
        window.location.reload();
      } else {
        console.error('Logout failed:', response.data);
      }
    } catch (error) {
      console.error('Error during logout:', error);
      if (!error.response) {
        console.log('Network error. Check your connection.');
      }
    }
  };
  useEffect(() => {
    // Set showMenu to true when the component mounts and the device width is below 600px
    if (window.innerWidth < 600) {
      setShowMenu(true);
    }else{
      setShowMenu(false);
    }
  }, []);

  const userHomePage = () => {
    navigate(`/user/${user.user_handle}`)
    window.location.reload();
  }
  return (
    <>
  
    <nav className='nav'>
      
        <button 
        className='nav-btn'
        onClick={() => setShowMenu(!showMenu)}>{
           showMenu ? <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
        : 
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>}</button>
      
      {
        <ul className='nav-list'>
        <li className='mobile'>
        <Link className='nav-link-home' to='/'>
          <picture className="logo-container mobile-container">
            <img 
              className='nav-logo'
              src="/gym-logo.svg" alt="gym_logo" />
              <h1>
              THE GYM APP
            </h1>
            
          </picture>
          </Link>
        </li>
        {!showMenu ? 
        <>
        <li>
          <Link
          className='nav-link'
           to='/exercises'>Exercises</Link>
        </li>
        <li>
          <Link
            className='nav-link'
           to='/routines'>Routines</Link>
        </li>
        <li>
        <Link className='nav-link-home' to='/'>
          <picture className="logo-container mobile-logo">
            <img 
              className='nav-logo'
              src="/gym-logo.svg" alt="gym_logo" />
              <h1>
              THE GYM APP
            </h1>
          </picture>
          </Link>
        </li>
        
        
          {
            isAuthenticated && user ?
            <>
            <Link className='nav-user_handle' onClick={userHomePage} >
            <h4>{user.user_handle}</h4>
            </Link>
            <button className='btn-logout' onClick={handleLogOut}>Log out</button>
            </>
             :
            <>
            
          {
          location.pathname !== '/login' ?
             
             <li>
            <Link 
          className='nav-link'
          to='/login'>Login </Link>
          </li>
          : ''
        }
          {
            location.pathname !== '/register' ?
            <li>
          <Link to='/register'
          className='nav-link'> Register</Link>
          </li>
          : ''
          }
          </>
          
          
        
        }</>
        : ''}
      </ul>
      }
      {
        isAuthenticated && user ? ''
        :
        <div className="nav-foot">
        <h5>
          <span className='exp'>Already experienced? </span>
          <Link 
          className='nav-link'
          to='/login'> Login </Link>
          <span className='nav-link'> / </span>
           <Link 
           className='nav-link'
           to='/register'>
             Register
              </Link>
           to make your own routine
        </h5>
      </div>}
    </nav>
    </>
  )
}

export default NavBar