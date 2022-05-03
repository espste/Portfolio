import './edit.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const EditAbout = (props) => {
  const [about, setAbout] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  //getting by id
  useEffect(() => {
    
    axios.get(`/about/${props.match.params.id}`)
      .then(res => {
        setAbout(res.data.about)
      }).catch(err => console.log(err))
  },[]);/* eslint-disable-line */

  //updating about
  const updateAbout = (e) => {
    e.preventDefault();
    
    const updateAbout = {about};

    axios.put(`/about/update/${props.match.params.id}`, updateAbout)
      .then(res => {
        setMessage(res.data.msg);
      }).catch(err => console.log(err))

      setAbout('');

      const timeout = setTimeout(() => {
        navigate("/admin");
      }, 1000) 

      return () => clearTimeout(timeout);
  };

  const handleAboutChange = e => {
    setAbout(e.target.value);
  };


  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form onSubmit={updateAbout}>
              <h3 className="updated">{message}</h3>
              <label htmlFor="text">About</label>
              <textarea
                name="textarea"
                cols="30"
                rows="3"
                value={about}
                onChange={handleAboutChange}
              />

              <div className="btns">
                <button type="submit">Update</button>
                <Link to="/admin">
                  <button className="cancel-btn">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditAbout;