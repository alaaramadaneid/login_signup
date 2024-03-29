import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation'





function Login() {
    const [values, setValues] = useState({
        email: '',
        password:''
    })
    const[errors, setErrors] = useState({})

    const handleInput = (event) =>{
            setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
   //create function handlSubmit 

   const handleSubmit =(event) =>{
    event.preventDefault();
    setErrors(Validation(values))

   }


  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="text-center">Sign-In</h2>
        {/** start create the form login in  */}
        <form action="" onSubmit={handleSubmit}>
            {/**create input email  */}
            <div className="mb-3">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" onChange={handleInput} name="email" placeholder="Enter Email" className="form-control rounded-0"/>
                {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
               {/**create input password  */}
               <div className="mb-3">
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" onChange={handleInput} name="password" placeholder="Enter Password" className="form-control rounded-0"/>
            </div>
            <button type='submit' className="btn btn-success w-100 rounded-0"><strong>Log in</strong></button>
            {/**creat account if you don't have an account  */}
            <p>You are agree to aour terms and policies</p>
            <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 test-decoration-none" ><strong>Create Account</strong></Link>
        </form>
      </div>
    </div>
  )
}

export default Login
