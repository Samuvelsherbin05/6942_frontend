import { Link } from "react-router-dom"




const Navbar = () => {
  return (
  <>
  
  
    <div className="world">
      <div className="parent">
         <p>Techworld </p>
      </div>
       <div className="img">
       
        
         <Link to={"/"}  className="link">Home</Link>
        <Link to={"/About"} className="link">About</Link>
        <Link to={"/Contact"} className="link">Contact</Link>
        <Link to={"/Server"} className="link">Server</Link>
     
  
   
       </div>
  
    </div>
  
  </>
  )
}

export default Navbar
