import './admin.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const initialState = {
  project_id: '',
  title: '',
  description: '',
};



const ProjectsAdmin = () => {
  const [project, setProject] = useState(initialState);
  const [projectData, setProjectData] = useState([]);
  const [images, setImages] = useState(false);
  const [message, setMessage] = useState('');
  const [messageCondition, setMessageCondition] = useState(false);


  //upload image
  const handleImageUpload = async e => {
    e.preventDefault();
    try {
      const file = e.target.files[0];

      if (!file) return alert('No files exist')
      if (file.size > 1024*1024) return alert('Size is too big..')
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        return alert('Incorrect file format..')
      }

      let formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'yuxlp3ad');

      //post
      const result = await axios.post('https://api.cloudinary.com/v1_1/kryyp/image/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': 'http://localhost:1337',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DEL',
          'Access-Control-Allow-Headers': 'Authorization'
        }
      });

      setImages(result.data);

    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  //delete image
  const handleImageDelete = async () => {
    try {
      
      await axios.post('/destroy', {public_id: images.public_id})
      setImages(false);
      
    } catch (err) {
      console.log(err.response.data.msg);
    }

  };

  //input change
  const handleInputChange = e => {
    const {name, value} = e.target;

    setProject({...project, [name]: value})

    // console.log(project.description);
  };

  //submit
  const handleSubmit = e => {
    e.preventDefault();

    try {
      
      axios.post('/project/', {...project, images})
        .then(res => {
          setMessage(res.data.msg);

          setTimeout(() => {
            setMessage('');
          }, 1000);

          setProject(initialState);
          setImages(false);

        })

    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  const styleUpload = {
    display: images ? 'block' : 'none' 
  }

  //fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/project')
        setProjectData(result.data);
        // console.log(result.data);
      } catch (err) {
        console.log(err.response.message);
      }
    };
    fetchData();
  },[])

  //delete
  const deleteProject = id => {
      axios.delete(`/project/${id}`)
        .then(res => {
          setMessageCondition(true);
          setMessage(res.data.msg);

          const timeout = setTimeout(() => {
            setMessageCondition(false);
            setMessage('');
          }, 2000)

          return () => clearTimeout(timeout);
        })

      const filterDeleteProject = projectData.filter(item => item._id !== id);
      setProjectData(filterDeleteProject);
  };

  return (
    <div className="same-component">
      <div className="same-form">
        <form onSubmit={handleSubmit}>
          <h4>Project Components</h4>

          <label htmlFor="text">Id</label>
          <input 
            type="text" 
            name="project_id" 
            required
            id="project_id"
            value={project.project_id}
            onChange={handleInputChange}  
          />

          <label htmlFor="text">Title</label>
          <input 
            type="text" 
            name="title" 
            required
            id="title" 
            value={project.title}
            onChange={handleInputChange} 
          />

          <label htmlFor="text">Description</label>
          <textarea 
            type="text" 
            name="description" 
            required
            id="description" 
            cols="30"
            rows="5"
            value={project.description}
            onChange={handleInputChange} 
          />
          {/* FILE UPLOAD */}
          <div className="upload">
            <input 
              type="file" 
              name="file" 
              id="file_up"
              onChange={handleImageUpload} 
            />
            <div id="file_img" style={styleUpload}>
              <img src={images ? images.url : ''} alt="" />
              <span onClick={handleImageDelete}>X</span>
            </div>
          </div>
         <button>Add Project</button> 
        </form>
      </div>
      <div className="same-item">
        <div className="about-info">

          {projectData.map(item => (
            <div className="projects-admin" key={item._id}>
              <div className="icons">
                <Link to={`/editProject/${item._id}`}><i className="fas fa-edit"></i></Link>
                <i className="fas fa-trash" onClick={() => deleteProject(item._id)}></i>
              </div>

              <div className="single-project">
                <div className="single-project-img">
                  <img src={item.url} alt="" />
                </div>
                <div className="single-project-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              <h3 className={messageCondition ? 'new-delete item-delete-tab' : 'item-delete-tab'}>{message}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsAdmin;