import { useState } from "react"

const Marks = () => {

    const [marks,setIsmark]=useState (35)

    const increasemark =()=>{

        setIsmark (marks+1)
    }
  return (
  <>
    
       <h1>Task4</h1>
      
    <h1>StudentMarks:</h1>
     <h2>Marks:{marks}</h2>


    <h2>{marks>40 ? "pass":"fail"}</h2>

    <button onClick={increasemark}>increase mark </button>


     
  
  
  </>
  )
}

export default Marks
