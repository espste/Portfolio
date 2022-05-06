import './Navbar.css';
import Logo from '../../images /logo.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { scroller } from 'react-scroll';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const activeToggle = () => {
    setToggle(!toggle);
  };

  //toggle of when clicking outside or x
  const closeNavbar = () => {
    if(toggle === true) {
      setToggle(false);
    }; 
  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 50,
      smooth: true,
      offset: -80
    });
  };

  return (
    <div className='nav-container'>
      <nav>
        <div className='logoBtn'>
          <Link to='/' onClick={()=>scrollToElement('Hero')}><img src={Logo} alt='' /></Link>

          <div className='btn' onClick={activeToggle}>
            <div className={toggle ? "bar1 animateBar" : "bar bar1"}></div>
            <div className={toggle ? "bar2 animateBar" : "bar bar2"}></div>
            <div className={toggle ? "bar3 animateBar" : "bar bar3"}></div>
          </div>
        </div>

        <div className='links-container'>
          <ul className={toggle ? "new-links links" : "links"} onClick={closeNavbar}>
            <li><Link to="/" onClick={()=>scrollToElement('Hero')}>Home</Link></li>
            <li><Link to="/" onClick={()=>scrollToElement('About')}>About</Link></li>
            <li><Link to="/" onClick={()=>scrollToElement('Education')}>Education</Link></li>
            <li><Link to="/" onClick={()=>scrollToElement('Projects')}>Projects</Link></li>
            <li><Link to="/" onClick={()=>scrollToElement('Experience')}>Experience</Link></li>
            <li><Link to="/" onClick={()=>scrollToElement('Contact')}>Contact</Link></li>
            {/* <li><Link to="/admin" className="admin">Admin</Link></li> */}
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;