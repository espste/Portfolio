import './edit.css';
import mongoose from 'mongoose';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditEducation = (props) => {
  const [education, setEducation] = useState([]);
  const [message, setMessage] = useState('');
  // const [subject, setSubject] = useState('');
  // const [year, setYear] = useState('');
  // const [school, setSchool] = useState('');
  const navigate = useNavigate();
  

  //getting by id
  useEffect(() => {

    axios.get(`/education/${props.params.id}`)
      .then(res => {setEducation(res.data.education)}) 
      .catch(err => console.log(err))
  }, [props.params.id])


  const updateEducation = e => {
    e.preventDefault();

    const postEducation = {education};

    axios.put(`/education/update/${props.match.params.id}`, postEducation)
      .then(res => {
        setMessage(res.data.msg);
    
      }).catch(err => console.log(err))

    setEducation('');

    const timeout = setTimeout(() => {
      navigate('/admin');
    }, 2000);

    return () => clearTimeout(timeout);
  };


  const handleSubjectChange = e => {
    setEducation(e.target.value);
    // console.log(education);
  };
 
  // const handleYearChange = e => {
  //   setYear(e.target.value);
  //   console.log(year);
  // };

  // const handleSchoolChange = e => {
  //   setSchool(e.target.value);
  //   console.log(school);
  // };

  

  return (
    <div className='edit'>
      <div className='main-container'>
        <div className='same-component'>
          <div className='same-form'>
            <form onSubmit={updateEducation}>
              <h3 className='updated'>{message}</h3>
              <h4>Education Component</h4>
              <label htmlFor='text'>Education</label>
              <input 
                type="text" 
                className='subject' 
                placeholder='subject'
                onChange={handleSubjectChange}
              />
              <input 
                type="text" 
                className='year' 
                placeholder='year'
                // onChange={handleYearChange}
              />
              <input 
                type="text" 
                className='school' 
                placeholder='school'
                // onChange={handleSchoolChange}
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

export default EditEducation;