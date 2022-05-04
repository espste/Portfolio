import './edit.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const initialState = {
  project_id: '',
  title: '',
  description: '',
};

const EditProjects = (props) => {
  const [project, setProject] = useState(initialState);
  const [images, setImages] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  //upload image
  const handleUpload = async e => {
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

      //post
      const result = await axios.post('/upload', formData, {
        headers: {'content-type': 'multipart/form-data'}
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

  const handleInputChange = e => {
    const {name, value} = e.target;

    setProject({...project, [name]:value});
  };

  //get by id
  useEffect(() => {
    
    axios.get(`/project/${id}`)
      .then(res => {
        // console.log(res.data);
        setProject({
          project_id: res.data.project_id,
          title: res.data.title,
          description: res.data.description
        })
      }).catch(err => console.log(err))

  }, [id]);

  //submit
  const handleSubmit = e => {
    e.preventDefault();

    try {
      
      axios.put(`/project/${props.match.params.id}`)
        .then(res => {
          setMessage(res.data.msg)
        })

    } catch (err) {
      console.log(err);
    }

    const timeout = setTimeout(() => {
      navigate('/admin');
    }, 2000);

    return () => clearTimeout(timeout);
  };

  const styleUpload = {
    display: images ? 'block' : 'none'
  };

  return (
    <div className='edit'>
      <div className='main-container'>
        <div className='same-component'>
          <div className='same-form'>
            <form onSubmit={handleSubmit}>
              <h3 className='updated'>{message}</h3>
              <h4>Project Components</h4>
              
              <label htmlFor="text">Id</label>
              <input 
                type="text" 
                name="product_id" 
                id="product_id"  
                required
                value={project.project_id}
                onChange={handleInputChange}
              />
              <label htmlFor="text">Title</label>
              <input 
                type="text" 
                name="title" 
                id="title"  
                required
                value={project.title}
                onChange={handleInputChange}
              />
              <label htmlFor="text">Description</label>
              <textarea 
                type="text" 
                name="description" 
                id="description" 
                cols="30"
                rows="5" 
                required
                value={project.description}
                onChange={handleInputChange}
              />
              {/* FILE UPLOAD */}
              <div className="upload">
                <input 
                  type="file" 
                  name="file" 
                  id="file_up"
                  onChange={handleUpload}
                  required 
                />
                <div id="file_img" style={styleUpload}>
                  <img src={images ? images.url : ''} alt='' />
                  <span onClick={handleImageDelete}>X</span>
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