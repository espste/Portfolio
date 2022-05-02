import './contact.css';
import BackImg from '../../images /im4.jpg';
import load2 from '../../images /load2.gif'

const Contact = () => {
  return (
    <div className='main-container'>
        <div className="contactForm">
          <h2 className="title">
            contact form
          </h2>
          <div className="contactForm-center">
            <div className="contact_form">
              <form >
                <p>Message</p>
                <input 
                  type="text"  
                  placeholder='Name..' 
                  required 
                />
                <input 
                  type="text"  
                  placeholder='Email..' 
                  required 
                />
                <textarea
                  type="text" 
                  name="message" 
                  placeholder='Write your message here..'>
                </textarea>
                <div className="sendBtn">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
            <div className="contact-info">
              <h4>Send Email</h4>
              <img src={BackImg} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}
export default Contact;