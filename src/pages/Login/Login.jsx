import React from 'react'
import "./Login.scss"
import logo from "../../assets/logo.png"

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} className="login-logo" alt='' />
      <div className="login-form">
        <h1>Sign In</h1>
        <form >
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Your email' />
          <input type="password" placeholder='Your email' />
          <button className='button'>Sign In</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          <p>New to Netflix? <span> Sign Up Now</span></p>
          <p>Already have an account? <span> Sign In Now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login