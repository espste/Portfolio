import './admin.css';
import { Link } from 'react-router-dom';

const ProjectsAdmin = () => {


  return (
    <div className="same-component">
      <div className="same-form">
        <form>
          <h4>Project Components</h4>
          <label htmlFor="text">Id</label>
          <input 
            type="text" 
            name="product_id" 
            required
            id="product_id"  
          />
          <label htmlFor="text">Title</label>
          <input 
            type="text" 
            name="title" 
            required
            id="title"  
          />
          <label htmlFor="text">Description</label>
          <textarea 
            type="text" 
            name="description" 
            required
            id="description" 
            cols="30"
            rows="5" 
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
         <button>Add</button> 
        </form>
      </div>
      <div className="same-item">
        <div className="about-info">
          
          {/* ICONS */}
          <div className="projects-admin">
            <div className="icons">
              <Link to={`/editProject`}><i className="fas fa-edit"></i></Link>
              <i className="fas fa-trash"></i>
            </div>

            <div className="single-project-img">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F163486-photo_manipulation-landscape-nature-road-field-sunset-grass-clouds.jpg&f=1&nofb=1" alt="" />
            </div>

            <div className="single-project-info">
              <h3>Sunset</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto iure laboriosam, quaerat similique nobis corrupti, fuga voluptates velit totam voluptatum temporibus! Perspiciatis molestiae iusto tempore numquam ex, eos ipsa!</p>
            </div>
            <h3 className="item-delete-tab"></h3>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsAdmin;