import './contact.css';
import { useState } from 'react';
import axios from 'axios';
import BackImg from '../../images /im4.jpg';
import load2 from '../../images /load2.gif'


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [banner, setBanner] = useState('');
  const [bool, setBool] = useState(false);

  //inputs
  const handleNameInput = e => {
    setName(e.target.value);
    // console.log(name);
  };

  const handleEmailInput = e => {
    setEmail(e.target.value);
    // console.log(email);
  };

  const handleMessageInput = e => {
    setMessage(e.target.value);
    // console.log(message);
  };

  //submit
  const handleFormSubmit = e => {
    e.preventDefault();
    let data = {
      name,
      email,
      message
    }
    
    setBool(true);

    axios.post('/', data)  
      .then(res => {
          setBanner(res.data.msg);
          setBool(false);

          setTimeout(() => {
            setBanner('');
          }, 2000);

          setName('');
          setEmail('');
          setMessage('');
        }).catch(err => console.log(err))
  };

  return (
    <div className='main-container'>
        <div className="contactForm">
          <h2 className="title">
            contact form
          </h2>
          <div className="contactForm-center">
            <div className="contact_form">
              <form onSubmit={handleFormSubmit}>
                <p>{banner}</p>
                
                <input 
                  type="text"  
                  placeholder='Name..' 
                  required
                  value={name}
                  onChange={handleNameInput}
                />
                <input 
                  type="email"  
                  placeholder='Email..' 
                  required
                  value={email}
                  onChange={handleEmailInput} 
                />
                <textarea
                  type="text" 
                  name="message" 
                  placeholder='Write your message here..'
                  value={message}
                  onChange={handleMessageInput}
                />

                <div className="sendBtn">
                  <button type="submit">Send{bool ? <b className="load" ><img src={load2} alt=""/></b> : ''}</button>
                </div>
              </form>
            </div>
            <div className="contact-info">
              <h4>Send me a message!</h4>
              <img src={BackImg} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}
export default Contact;