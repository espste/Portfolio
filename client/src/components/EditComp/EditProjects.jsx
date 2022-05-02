import './edit.css';
import { Link } from 'react-router-dom';

const EditProjects = () => {
  return (
    <div className='edit'>
      <div className='main-container'>
        <div className='same-component'>
          <div className='same-form'>
            <form>
              <h3>Edit</h3>
              <h4>Project Components</h4>
              <label htmlFor="text">Id</label>
              <input 
                type="text" 
                name="product_id" 
                id="product_id"  
                required
              />
              <label htmlFor="text">Title</label>
              <input 
                type="text" 
                name="title" 
                id="title"  
                required
              />
              <label htmlFor="text">Description</label>
              <textarea 
                type="text" 
                name="description" 
                id="description" 
                cols="30"
                rows="5" 
                required
              />
              {/* FILE UPLOAD */}
              <div className="upload">
                <input 
                  type="file" 
                  name="file" 
                  id="file_up" 
                />
                <div id="file_img">
                  <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LZ-22I7XjH2iRZmMP-8kDAHaEo%26pid%3DApi&f=1' alt='' />
                  <span>X</span>
                </div>
              </div>
              <div className='btns'>
                <button>Update</button> 
                <Link to="/admin"><button className='cancel-btn'>Cancel</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProjects;