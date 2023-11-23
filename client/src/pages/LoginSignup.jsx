import React from 'react'
import { Link } from 'react-router-dom';
import "./css/LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className='loginsignup-conatiner'>
          <h2>Sign UP</h2>
          <div className='loginsignup-fields'>
            <input type='text' placeholder='Your Name' />
            <input type='email' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <button onClick={()=>{}}>Submit</button>
          </div>
          <div className='login-here'>
            <p>Already have a account ?</p>
            <Link onClick={()=>{}}>Login here</Link>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup;
