import './admin.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExperienceAdmin = () => {
  const [experience, setExperience] = useState('');
  const [experienceData, setExperienceData] = useState([]);
  const [message, setMessage] = useState('');
  const [messageCondition, setMessageCondition] = useState(false);

  //getting data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/experience');
        // console.log(result);
        setExperienceData(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  //delete by id
  const deleteExperience = id => {
    const experienceFilterDelete = experienceData.filter(item => item._id !== id);

    axios.delete(`/experience/${id}`)
      .then(res => {
        setMessageCondition(true);
        setMessage(`${res.data.msg}`);

        const timeout = setTimeout(() => {
          setMessageCondition(false);
          setMessage('');
        }, 1000)

        return () => clearTimeout(timeout)

      }).catch(err => console.log(err))
      setExperienceData(experienceFilterDelete);
  };

  const handleChange = e => {
    setExperience(e.target.value);
    // console.log(experience);
  };

  //add new experience
  const postExperience = e => {
    e.preventDefault();

    const postExperience = {experience};

    setExperience('');
    axios.post('/experience', postExperience)
      .then(res => console.log('Added new Experience..'))
      .catch(err => console.log(err))

      setExperienceData([...experienceData, postExperience])

  };


  return (
    <div className='same-component'>
      <div className="same-form">
        <form onSubmit={postExperience}>
          <h4>Experience Component</h4>
          <label htmlFor="text">Experience</label>
          <input 
            type="text" 
            value={experience}
            onChange={handleChange}  
          />
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          {experienceData.map(item => (
            <div className="same-admin" key={item._id}>
              <div className="icons">
                <Link to={`/editExperience/${item._id}`}><i className="fas fa-edit"></i></Link>
                <i 
                  className="fas fa-trash"
                  onClick={() => deleteExperience(item._id)}  
                ></i>
              </div>

              <div className="single-experience">
                <p>{item.experience}</p>
              </div>
              <h3 className={messageCondition ? 'new-delete item-delete-tab' : 'item-delete-tab'}>{message}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceAdmin;