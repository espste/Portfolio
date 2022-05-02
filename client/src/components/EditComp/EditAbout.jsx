import './edit.css';
import { Link } from 'react-router-dom';

const EditAbout = () => {
  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form>
              <h3 className="updated">Edit</h3>
              <label htmlFor="text">About</label>
              <textarea
                name="textarea"
                id=""
                cols="30"
                rows="3"
              ></textarea>

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