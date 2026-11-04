import { useState } from "react"


const Registertion = () => {

  const [Student,setStudent]= useState({
    name:"",
    age:"",
    email:""
  })

    const [userclick,setUserclick]=useState(false)

         const handlechange = (e)=>{

            setStudent({...Student,[e.target.name]: e.target.value })
         }


           const handleclick = (e) =>{
               
            (e.preventDefault())

           setUserclick(true)

           alert("Restration successfully")
           }




  return (
    <>

    <h1>Task2</h1>

    
    <form onSubmit={handleclick}>
                <input type="text" name="name" placeholder="enter your name" onChange={handlechange}/>
          <input type="text" name="age" placeholder="enter your age" onChange={handlechange} />
            <input type="email" name="email" placeholder="enter your email" onChange={handlechange} />
      
          <button type="submit" >Register</button>

    </form>
    
     {userclick && (
    <>
        <h2>Student Details</h2>
        <p>Name: {Student.name}</p>
        <p>Age: {Student.age}</p>
        <p>Email: {Student.email}</p>
    </>
)}
    
    
    
    
    </>
  )
}

export default Registertion
