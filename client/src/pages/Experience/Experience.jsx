import './experience.css';
import { useContext } from 'react';
import { DataContext } from '../../components/Context/GlobalContext';


const Experience = () => {
  const state = useContext(DataContext);
  const [experience] = state.experience;
  // console.log(experience);

  return (
    <div className='main-container'>
      <h2 className="title">
        experience
      </h2>
      <div className="experience">
        <div className="experience-center">

          {experience.map(item => (
            <div className="single-experience" key={item._id}>
              <p>{item.experience}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Experience;