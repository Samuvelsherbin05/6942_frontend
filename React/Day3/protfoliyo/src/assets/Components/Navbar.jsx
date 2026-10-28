

const Navbar = () => {
  return (
    <>
       <nav className="bg-amber-500 font-bold flex gap-250 p-10 pl-10">
      <h2>MY PORTFOLIYO</h2>

      <div className="flex gap-5">
        <a href="#home" className=" hover:text-green-600 ">Home</a>
        <a href="#about"  className=" hover:text-green-600"  >About</a>
        <a href="#contact"  className=" hover:text-green-600"  >Contact</a>
      </div>
    </nav>

     
    
    </>
  )
}

export default Navbar
