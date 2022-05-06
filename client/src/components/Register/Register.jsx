import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const [user, setUser] = useState({username: '', email: '', password: ''});
  const [error, setError] = useState('');

  
  //onChange
  const handleChange = e => {
    const {name, value} = e.target;

    setUser({...user, [name]: value})
    setError('');
  };

  //onSubmit
  const handleRegisterSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post(`/user/register`, {
        username: user.username,
        email: user.email,
        password: user.password
      })

      setUser({
        username: '', 
        email: '', 
        password: ''
      });

      setError(res.data.msg);

    } catch (error) {
      error.response.data.msg && setError(error.response.data.msg)
    }
  };

  return (
    <div className='login'>
        <div className="main-container">
          <div className="login-center">
            <form onSubmit={handleRegisterSubmit}>
              <p>{error}</p>
              <label htmlFor="name">Name</label>
              <input 
                type="name" 
                name="username"
                value={user.username}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">New Password</label>
              <input 
                type="password" 
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />

              <div className="loginBtn">
                <button type='submit'>Register</button>
                <Link to="/"><button>Back</button></Link>
              </div>

            </form>
          </div>
        </div>
    </div>
  )
}

export default Register;