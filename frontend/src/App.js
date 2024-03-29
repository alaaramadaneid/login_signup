import React from 'react'
import Login from './Login'
import Signup from './Signup';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
          {/** Create the route to Login page*/}
       <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
