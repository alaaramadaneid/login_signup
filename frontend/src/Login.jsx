import React from 'react'

function Login() {
  return (
    <div>
      <div>
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
        </form>
      </div>
    </div>
  )
}

export default Login
