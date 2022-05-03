import './education.css';
import { useContext } from 'react';
import { DataContext } from '../../components/Context/GlobalContext';

const Education = () => {
  const state = useContext(DataContext);
  const [education] = state.education;
  // console.log(education);

  return (
    <div>
      <div className="main-container">
        <div className="education">
          <h2 className="title">
            education
          </h2>
        </div>

        <div className="education-center">

          {education.map(item => {
            return (
              <div className="single-education" key={item._id}>
                <p>{item.education}</p>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Education;