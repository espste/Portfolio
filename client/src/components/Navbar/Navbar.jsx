import './Navbar.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Logo from '../../images /logo.jpg';
import { DataContext } from '../Context/GlobalContext';

const Navbar = () => {
  const state = useContext(DataContext);
  const [isLogin, setIsLogin] = state.isLogin;
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
  //scrolling
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 50,
      smooth: true,
      offset: -80
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(false);
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
            <li className={isLogin?'':'adminLi'}><Link to={isLogin ? '/admin/' : '/'}>{isLogin ? <div className='admin'>Admin</div> : ''}</Link></li>
            <li><Link onClick={handleLogout} to={isLogin ? '/' : '/login'}>{isLogin ? 'Logout' : 'Login'}</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;