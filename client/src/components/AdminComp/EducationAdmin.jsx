import './admin.css';
import { Link } from 'react-router-dom';

const EducationAdmin = () => {
  return (
    <div className='same-component'>
      <div className="same-form">
        <form>
          <h4>Education Component</h4>
          <label htmlFor="text">Education</label>
          <input type="text" />
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          <div className="same-admin">
            <div className="icons">
              <Link to={`/editEducation`}><i className="fas fa-edit"></i></Link>
              <i className="fas fa-trash"></i>
            </div>

            <div className="single-education">
              <p>web developer</p>
            </div>
            <h3 className='item-delete-tab'></h3>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationAdmin;