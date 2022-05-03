import './about.css';
import { useContext } from 'react';
import { DataContext } from '../../components/Context/GlobalContext';


const About = () => {
  const state = useContext(DataContext);
  const [about] = state.about;

  return (
    <div className="main-container">
        <div className="about">
          <h2 className="title">
            about
          </h2>
        </div>
        
        {about.map(item => {
          return (
            <div className="about-info" key={item._id}>
              <p>{item.about}</p>
            </div>
          ) 
        })}
    </div>
  )
}

export default About;