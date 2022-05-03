import './admin.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const AboutAdmin = () => {
  const [about, setAbout] = useState('');
  const [aboutData, setAboutData] = useState([]);
  const [message, setMessage] = useState('');
  const [messageCondition, setMessageCondition] = useState(false);
  
  // fetching data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const res = await axios.get(`/about`);
        // console.log(res.data);
        setAboutData(res.data); 

      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleAboutChange = e => {
    setAbout(e.target.value);
    // console.log(about);
  };

  //submit new about  
  const handleSubmit = e => {
    e.preventDefault();
    const postAbout = {about};
    
    setAbout();

    axios.post(`/about`, postAbout)
      .then(res => console.log('added'))
      .catch(err => console.log(err)  )

    setAboutData([...aboutData, postAbout]);
    
  };

  //delete 
  const deleteAbout = (id) => {
    const aboutFilterDelete = aboutData.filter(item => item._id !== id)
    
    axios.delete(`/about/${id}`)
    .then(res => {
      setMessageCondition(true);
      setMessage(`${res.data.msg}`);

      const timeout = setTimeout(() => {
        setMessage('');
        setMessageCondition(false);
      }, 1000);

      return () => clearTimeout(timeout)

    }).catch(err => console.log(err));
    
    setAboutData(aboutFilterDelete);
  };


  return (
    <div className='same-component'>
      <div className="same-form">
        <form onSubmit={handleSubmit}>
          <h4>About Component</h4>

          <label htmlFor="text">About</label>
          <textarea 
            name="textarea" 
            cols="30" 
            rows="3"
            value={about}
            onChange={handleAboutChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="same-item">

        {aboutData.map((item) => {
          return (
            <div className="about-info" key={item._id}>
              <div className="icons">
                <Link to={`/edit/${item._id}`}><i className="fas fa-edit"></i></Link>
                <i 
                  className="fas fa-trash"
                  onClick={() => deleteAbout(item._id)}
                ></i>
              </div>
  
              <p>{item.about}</p>
            </div>
          )
        })}

        <h3 className={messageCondition ? 'new-delete item-delete-tab' : 'item-delete-tab'}>{message}</h3>
      </div>
    </div>
  )
}

export default AboutAdmin;