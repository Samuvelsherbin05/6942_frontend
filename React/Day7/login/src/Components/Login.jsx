import { useState } from "react"



const Login = () => {

    const [islogin,setIslogin] = useState(false)
  return (
    
    <>
       <h1>{islogin ? "Welcome User" : "Please Login"}</h1>


       <button onClick={()=>setIslogin(true)}>login</button>

       <br /><br /><br />

       <button onClick={()=>setIslogin(false)}>logout</button>
    
    </>
  )
}

export default Login

