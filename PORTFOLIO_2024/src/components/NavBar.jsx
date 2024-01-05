import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation();
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className={`nav-container ${isNavOpen ? 'open' : ''}`}>
      <header className="nav-header">
        <h1><Link to={'/'} style={{ color: 'black' }} className="programmer-text ">Jonathan Nunez</Link></h1>
        <div className="nav-toggle" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
      <ul className={`nav-list ${isNavOpen ? 'open' : ''}`}>
        <li><Link className="nav-link" to={'/'} style={{ color: pathname === '/' ? 'black' : '#C4C4C4' }}>Home</Link></li>
        <li><Link className="nav-link" to={'/resume'} style={{ color: pathname === '/resume' ? 'black' : '#C4C4C4' }}>Resume</Link></li>
      </ul>
    </nav>
  );
};
