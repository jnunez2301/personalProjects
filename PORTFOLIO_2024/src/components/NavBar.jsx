import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="nav-container">
      <header className="nav-header" >
        <h1><Link to={'/'} style={{color: 'black'}}>Jonathan Nunez</Link></h1>
      </header>
      <ul className="nav-list">
      <li><Link to={'/'} style={{ color: pathname === '/' ? 'black' : '#C4C4C4' }}>Home</Link></li>
        <li><Link to={'/projects'} style={{ color: pathname === '/projects' ? 'black' : '#C4C4C4' }}>Projects</Link></li>
        <li><Link to={'/about'} style={{ color: pathname === '/about' ? 'black' : '#C4C4C4' }}>About Me</Link></li>
        <li><Link to={'/resume'} style={{ color: pathname === '/resume' ? 'black' : '#C4C4C4' }}>Resume</Link></li>
      </ul>
    </nav>
  );
};
