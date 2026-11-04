import { useState } from "react"


const React = () => {

    const [username,setUsername] =useState("")
    const [userclick,setUserclick]=useState("")

    const handlename =(e)=>{
            setUsername(e.target.value)   
       
    }
      const handleclick = (e)=>{
       (e.preventDefault())
          setUserclick(username)
         
           alert ("sucessfully registerd")
      }
       

   
  return (
   <>


   <h1>Student Name:{userclick}</h1>
    <form>

       <input type="text" placeholder="enter your name" onChange={handlename}/>

       <button onClick={handleclick}>click</button>


    </form>
   
   
   </>
  )
}

export default React
