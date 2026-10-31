

const Programming = () => {

    const language =["html" ,"css" ,"javascript","React"]

   return (
    <>
       <div>


        <h1>Task1</h1>
           <h1>Programming Languages</h1>


           <ul>
               {language.map((language)=>(
                 
               <li key={language}>{language}</li>
               
               
               ))}
           </ul>
       </div>


    
    
    </>
  )
}

export default Programming
