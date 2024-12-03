import React from 'react'
import './LoginForm.css'
import Header from '../components/header/Header'
import logo_big1 from '../homePage/imgHome/logo_big1.png'

const LoginForm = () => {
  return (
    <div>
      <Header />
      <div className="formlogin">
        <div className="content">
          <form>
            <p id='sign-in' >Sign-in</p>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label labellog">Email*</label>
              <input type="email" className="form-control input_log" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label labellog">Password*</label>
              <input type="password" className="form-control input_log" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <div>
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
              </div>
              <a href="">Forgot Password</a>
            </div>
            <button type="submit" className="btn btn-primary btn_login">Login</button>
          </form>
        </div>
        <img src={logo_big1} alt="" />
      </div>
    </div>
  )
}

export default LoginForm