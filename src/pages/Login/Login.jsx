import React, { useState } from 'react'
import "./Login.scss"
import logo from "../../assets/logo.png"
import {login, signup} from "../../firebase"


const Login = () => {

  const [signState, setSignState] = useState("Sign In")

  return (
    <div className='login'>
      <a href="/">
        <img src={logo} className="login-logo" alt='' />
      </a>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState === "Sign Up" ? <input type="text" placeholder='Your name' /> : <></>}

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
          {signState === "Sign In" ? <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}> Sign Up Now</span></p>
          : <p>Already have an account? <span onClick={() => setSignState("Sign In")}> Sign In Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login