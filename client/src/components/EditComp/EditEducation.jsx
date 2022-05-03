import './edit.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditEducation = (props) => {
  const [education, setEducation] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  //getting by id
  useEffect(() => {

    axios.get(`/education/${props.match.params.id}`)
      .then(res => {setEducation(res.data.education)}) 
      .catch(err => console.log(err))

  }, [props.match.params.id]);



  return (
    <div className='edit'>
      <div className='main-container'>
        <div className='same-component'>
          <div className='same-form'>
            <form>
              <h3 className='updated'>Updated</h3>
              <h4>Education Component</h4>
              <label htmlFor='text'>Education</label>
              <input type="text" className='subject' placeholder='subject'/>
              <input type="text" className='year' placeholder='year'/>
              <input type="text" className='school' placeholder='school'/>
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

export default EditEducation;