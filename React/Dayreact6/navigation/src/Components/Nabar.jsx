import { Link } from "react-router-dom"
import"../"



const Navbar = () => {
  return (
  <>
  
  
    <div className="world">
      <div>
         <p>Techworld </p>
      </div>
       <div>
         <nav>
        
         <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/Service"}>Service</Link>
     
  
     </nav>
       </div>
  
    </div>
  
  </>
  )
}

export default Navbar
