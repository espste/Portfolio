import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className='login'>
        <div className="main-container">
          <div className="login-center">
            <form>
              <p>Register</p>
              <label htmlFor="name">Name</label>
              <input 
                type="name" 
                name="name"
                required
              />
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email"
                required
              />
              <label htmlFor="password">New Password</label>
              <input 
                type="password" 
                name="password"
                required
              />

              <div className="loginBtn">
                <button type='submit'>Register</button>
                <Link to="/"><button>Back</button></Link>
              </div>

            </form>
          </div>{/* /login-center */}
        </div>{/* /main-container */}
    </div>
  )
}

export default Register;