import React from 'react'

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        {/** start create the form login in  */}
        <form action="">
            {/**create input email  */}
            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter Email"/>
            </div>
               {/**create input password  */}
               <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password"/>
            </div>
            <button className="btn btn-success">Log in</button>
            {/**creat account if you don't have an account  */}
            <p>You are agree to aour terms and policies</p>
            <button className="btn btn-default border">Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login
