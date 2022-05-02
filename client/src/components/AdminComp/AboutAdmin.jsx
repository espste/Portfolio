import './admin.css';
import { Link } from 'react-router-dom';

const AboutAdmin = () => {
  return (
    <div className='same-component'>
      <div className="same-form">
        <form>
          <h4>About Component</h4>
          <label htmlFor="text">About</label>
          <textarea name="textarea" cols="30" rows="3"></textarea>
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          <div className="icons">
            <Link to={`/editAbouts`}><i className="fas fa-edit"></i></Link>
            <i className="fas fa-trash"></i>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, consequuntur ratione soluta aperiam aliquid minima maxime cum perferendis sint doloremque maiores laboriosam sapiente, labore corporis ut ipsum. Porro, autem! Delectus!</p>
        </div>
      </div>

      <h3 className='item-delete-tab'></h3>
    </div>
  )
}

export default AboutAdmin;