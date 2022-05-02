import './footer.css';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Footer = () => {
  
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 50,
      smooth: true,
      offset: -80
    });
  };


  return (
    <>
      <div className="main-contact">
        <div className="contact">
          <div className="contact-center">
            <div className="contact-center-links">
              <div className="contact-links">
                <li>
                  <Link to='/' onClick={()=>scrollToElement('Hero')}>Home</Link>
                </li>
                <li>
                  <Link to='/' onClick={()=>scrollToElement('About')}>About</Link>
                </li>
                <li>
                  <Link to='/' onClick={()=>scrollToElement('Education')}>Education</Link>
                </li>
                <li>
                  <Link to='/' onClick={()=>scrollToElement('Experience')}>Experience</Link>
                </li>
                <li>
                  <Link to='/' onClick={()=>scrollToElement('Projects')}>Projects</Link>
                </li>
                <li>
                  <Link to='/' onClick={()=>scrollToElement('Contact')}>Contact</Link>
                </li>
                <li className='admin'>
                  <Link to='/'>Admin</Link>
                </li>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
              </div>
            </div>

            <div className="contact-center-socialMedia">
              <div className="contact-socialMedia">
                <li><a href="/#"><i className='fab fa-twitter-square'></i></a>Twitter</li>
                <li><a href="/#"><i className='fab fa-facebook-square'></i></a>Facebook</li>
                <li><a href="/#"><i className='fab fa-linkedin'></i></a>LinkedIn</li>
              </div>
            </div>
            <div className="footer">
              <p>Designed and created by Espen Stensland &copy; 2022</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer;