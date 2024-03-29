import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="text-center">Sign-Up</h2>
        {/** start create the form login in  */}
        <form action="">
            {/**create input email  */}
            <div className="mb-3">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder="Enter Email" className="form-control rounded-0"/>
            </div>
            {/**create input name */}
            <div className="mb-3">
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="text" placeholder="Enter Name" className="form-control rounded-0"/>
            </div>
               {/**create input password  */}
               <div className="mb-3">
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder="Enter Password" className="form-control rounded-0"/>
            </div>
            <button className="btn btn-success w-100 rounded-0"><strong>Signup</strong></button>
            {/**creat account if you don't have an account  */}
            <p>You are agree to aour terms and policies</p>
            <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 test-decoration-none" ><strong>Login</strong></Link>
        </form>
      </div>
    </div>
  )
}

export default Signup
