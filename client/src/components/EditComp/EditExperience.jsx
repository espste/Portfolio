import './edit.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const EditExperience = (props) => {
  const [experience, setExperience] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  //getting by id
  useEffect(() => {
    axios.get(`/experience/${id}`)
      .then(res => {
        setExperience(res.data)
      }).catch(err => console.log(err))
  }, [id])

  //update
  const updateExperience = e => {
    e.preventDefault();

    const postExperience = {experience};

    axios.put(`/experience/update/${props.params.id}`, postExperience)
      .then(res => {setMessage(res.data.msg)})
      .catch(err => console.log(err))

    setExperience('');

    setTimeout(() => {
      navigate('/admin');
    }, 1000)


  };

  const handleChange = e => {
    setExperience(e.target.value);
    // console.log(experience);
  };

  return (
    <div className='edit'>
      <div className='main-container'>
        <div className='same-component'>
          <div className='same-form'>
            <form onSubmit={updateExperience}>
              <h3 className='updated'>{message}</h3>
              <h4>Experience Component</h4>
              <label htmlFor='text'>Experience</label>
              <input 
                type="text" 
                value={experience}
                onChange={handleChange}  
              />
              <div className='btns'>
                <button type='submit'>Update</button>
                <Link to='/admin'>
                  <button className='cancel-btn'>Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditExperience;