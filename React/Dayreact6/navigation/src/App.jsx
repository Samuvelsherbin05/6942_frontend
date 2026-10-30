import {Routes,Route } from "react-router-dom"
import Navbar from "./Components/Nabar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Server from "./Pages/Server"


const App = () => {
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/About"} element={<About/>}/>
        <Route path={"/Contact"} element={<Contact/>}/>
          <Route path={"/Server"} element={<Server/>}/>
    </Routes>
   
    </>
  )
}

export default App
