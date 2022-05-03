import './admin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const EducationAdmin = () => {
  const [education, setEducation] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [message, setMessage] = useState('');
  const [messageCondition, setMessageCondition] = useState(false);


  //post 
  const postEducation = e => {
    e.preventDefault();
    const postEducation = {education};

    setEducation('');

    axios.post(`/education`, postEducation)
      .then(res => console.log('Added new Education..'))
      .catch(err => console.log(err));

      setEducationData([...educationData, postEducation]);

  };


  //delete 
  const deleteEducation = (id) => {
    const educationFilterDelete = educationData.filter(item => item._id !== id);

    axios.delete(`/education/${id}`)
      .then(res => {
        setMessageCondition(true);
        console.log(`${res.data.msg}`)
        setMessage(`${res.data.msg}`);

        const timeout = setTimeout(() => {
          setMessageCondition(false);
          setMessage('');
        }, 1000);

        return () => clearTimeout(timeout)

      }).catch(err => console.log(err))
      setEducationData(educationFilterDelete);
  };

  const handleChange = e => {
    setEducation(e.target.value);
    // console.log(education);
  };

  //get 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/education');
        // console.log(result);
        setEducationData(result.data);

      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [education])
  


  return (
    <div className='same-component'>
      <div className="same-form">
        <form onSubmit={postEducation}>
          <h4>Education Component</h4>
          <label htmlFor="text">Education</label>
          <input type="text" value={education} onChange={handleChange}/>
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="same-item">
        <div className='about-info'> 
          {educationData.map(item => (
              <div className="same-admin" key={item._id}>
                <div className="icons">
                  <Link to={`/editEducation/${item._id}`}><i className="fas fa-edit"></i></Link>
                  <i 
                    className="fas fa-trash"
                    onClick={() => deleteEducation(item._id)}  
                  ></i>
                </div>

                <div className="single-education">
                  <p>{item.education}</p>
                </div>
            
                <h3 className={messageCondition ? 'new-delete item-delete-tab' : 'item-delete-tab'}>{message}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default EducationAdmin;