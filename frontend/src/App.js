import React from 'react'
import Login from './Login'
import { BrowserRouter ,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
          {/** Create the route to Login page*/}
       <Routes>
        <Route path="/" element={<Login/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
