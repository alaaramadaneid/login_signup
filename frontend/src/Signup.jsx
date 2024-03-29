import React from 'react'
import { Link } from 'react-router-dom'
import Validation from './SignupValidation';
import { useState } from 'react';

const Signup = () => {
    const [values, setValues] = useState({
        name:'',
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
        <h2 className="text-center">Sign-Up</h2>
        {/** start create the form login in  */}
        <form action="" onSubmit={handleSubmit}>
            {/**create input email  */}
            <div className="mb-3">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" name="email" onChange={handleInput} placeholder="Enter Email" className="form-control rounded-0"/>
                {errors.email && <span className="text-danger">{errors.email}</span>}

            </div>
            {/**create input name */}
            <div className="mb-3">
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="text" name="name" onChange={handleInput} placeholder="Enter Name" className="form-control rounded-0"/>
                {errors.name && <span className="text-danger">{errors.name}</span>}

            </div>
               {/**create input password  */}
               <div className="mb-3">
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" name="password" onChange={handleInput} placeholder="Enter Password" className="form-control rounded-0"/>
                {errors.password && <span className="text-danger">{errors.password}</span>}

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
