import { useLocation, useNavigate } from 'react-router-dom'
import './NavBar.component.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import axios from 'axios'

const NavBar = () => {
 
  const { isAuthenticated, user, loading, error } = useAuth();
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
  /* console.log(location.pathname); */
  const userHomePage = () => {
    navigate(`/user/${user.user_handle}`)
    window.location.reload();
  }
  return (
    <>
  
    <nav className='nav'>
      
      
      {
        
        <ul className='nav-list'>
        <li>
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
      
        <li>
          <Link
          className='nav-link'
           to='/exercises'>Exercises</Link>
        </li>
        {/* <li>
          <Link
          className='nav-link'
           to='/challenges'>Challenges</Link>
        </li> */}
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
            <Link onClick={userHomePage} >
            <h4>{user.user_handle}</h4>
            </Link>
            <button className='btn' onClick={handleLogOut}>Logout</button>
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
          
          

        }
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