import './login.css';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../Context/GlobalContext';
import axios from 'axios';

// import Register from '../Register/Register';


const Login = () => {
  const navigate = useNavigate();
  const state = useContext(DataContext);

  const [user, setUser] = useState({email: '', password: ''});
  const [isLogin, setIsLogin] = state.isLogin;
  const [error, setError] = useState('');

  const handleInputChange = e => {
    const {name, value} = e.target;
    
    if(error) {
      console.log(error);
    }

    setUser({...user, [name]: value});
    setError('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`/user/login`, {
        email: user.email,
        password: user.password
      });
      setUser({name: '', email: '', password: ''});
      
      localStorage.setItem('tokenStore', res.data.token);
      setIsLogin(true);
      
      setError(res.data.msg);

      setTimeout(() => {
        navigate('/admin');
      }, 1000);

      console.log(isLogin);

    } catch (error) {
      error.response.data.msg  && setError(error.response.data.msg);
    }
  };

  return (
    <>
      <div className='login'>
        <div className="main-container">
          <div className="login-center">
            <form onSubmit={handleLoginSubmit}>
              <p>{error ? error : 'Login'}</p>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email"
                value={user.email}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                name="password"
                value={user.password}
                onChange={handleInputChange}
                required
              />

              <div className="loginBtn">
                <button type='submit'>Login</button>
                <Link to="/"><button>Back</button></Link>
              </div>

            </form>
          </div>
        </div>
      </div>
      {/* <Register /> */}
    </>
  )
}

export default Login;