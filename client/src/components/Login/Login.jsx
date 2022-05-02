import './login.css';
import { Link } from 'react-router-dom';
// import Register from '../Register/Register';

const Login = () => {
  return (
    <>
      <div className='login'>
        <div className="main-container">
          <div className="login-center">
            <form>
              <p>Login</p>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email"
                required
              />
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                name="password"
                required
              />

              <div className="loginBtn">
                <button type='submit'>Login</button>
                <Link to="/"><button>Back to home</button></Link>
              </div>

            </form>
          </div>{/* /login-center */}
        </div>{/* /main-container */}
      </div>
      {/* <Register /> */}
    </>
  )
}

export default Login;