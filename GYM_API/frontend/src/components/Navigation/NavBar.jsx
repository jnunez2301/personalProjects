import { useState } from 'react';
import './NavBar.component.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  
  const handleHide = () => {
    setShowNav(!showNav);    
  }
  
  return (
    <>
   {/*  {
      !showNav ?
      <button
      className='show-nav-btn'
       onClick={handleHide}>MENU</button>
       :
       <button
    className='show-nav-btn'
     onClick={handleHide}>CLOSE</button>
    } */}
    <nav className='nav'>
      
      
      {
        showNav && 
        <ul className='nav-list'>
        <li>
        <Link className='nav-link-home' to='/'>
          <picture className="logo-container mobile-container">
            <img 
              className='nav-logo'
              src="/gym-logo.svg" alt="gym_logo" />
              <h1>
              THE GYM API
            </h1>
          </picture>
          </Link>
        </li>
      
        <li>
          <Link
          className='nav-link'
           to='/exercises'>Exercises</Link>
        </li>
        <li>
          <Link
          className='nav-link'
           to='/challenges'>Challenges</Link>
        </li>
        <li>
        <Link className='nav-link-home' to='/'>
          <picture className="logo-container mobile-logo">
            <img 
              className='nav-logo'
              src="/gym-logo.svg" alt="gym_logo" />
              <h1>
              THE GYM API
            </h1>
          </picture>
          </Link>
        </li>
        <li>
          <Link
            className='nav-link'
           to='/routines'>Routines</Link>
        </li>
        <li className="login-register">
          <Link 
          className='nav-link'
          to='/login'>Login </Link>
          <span> | </span>
          <Link to='/register'
          className='nav-link'> Register</Link>
        </li>
      </ul>
        }
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
      </div>
    </nav>
    </>
  )
}

export default NavBar