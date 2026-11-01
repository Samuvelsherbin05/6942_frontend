import { useState } from "react"

const Application = () => {

  

        const [count,Setcount]=useState(0) 

        const number = () =>{

            Setcount (count+1) 
          
        }

        const react =()=>{

          Setcount (count-1)
        }

        const task =()=>{

           Setcount (0)
        }
       
    
  return (
  <>


  <h1>Task2</h1>


  <h2>Count:{count}</h2>

        <button onClick={number}>increment</button><br /><br />
        <button onClick={react}>decrement</button><br /><br />
       <button onClick={task}>reset</button>
  
  
  
  
  </>
  )
}

export default Application
