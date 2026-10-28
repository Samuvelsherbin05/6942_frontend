import logo from"../Images/4.jpg"
import logoone from"../Images/5.jpg"
import logotwo from"../Images/6.jpg"
import logothree from"../Images/7.jpg"
import logofour from"../Images/8.jpg"
import logofive from"../Images/9.jpg"
import logosix from"../Images/10.jpg"
import logoseven from"../Images/11.jpg"

const Products = () => {
  return (
   <>
   <h1 className="font-bold flex mb-6 ml-150">Product Info</h1>
   <div className="flex gap-20 flex-wrap bg-amber-950" id="Student">
    
     <div className="bg-gray-600 rounded-2xl p-6 w-60 ml-5 transition-transform duration-1000 hover:scale-110  text-center mb-5 hover:text-red-600 mt-5 ">
        <div>
      <div className="rounded-2xl p-4 felx justify-center ">
        <img src={logo} alt="mobile image" className="rounded-2xl " />
       </div>
       <div>
        <p>product:Mobile</p>
        <p>price: ₹60,000</p>
        <p>Available</p>
       </div>
     </div>
     </div>

     <div className="bg-gray-600 rounded-2xl p-6 w-60 ml-5 transition-transform duration-1000 hover:scale-110 text-center mb-5  hover:text-red-600 mt-5">
        <div>
      <div className="rounded-2xl p-4 felx justify-center ">
        <img src={logoone} alt="mobile image" className="rounded-2xl " />
       </div>
       <div>
        <p>product:Mobile</p>
        <p>price: ₹60,000</p>
        <p>Available</p>
       </div>
     </div>
     </div>
     <div className="bg-gray-600 rounded-2xl p-6 w-60 ml-5 transition-transform duration-1000 hover:scale-110 text-center mb-5  hover:text-red-600 mt-5">
        <div>
      <div className="rounded-2xl p-4 felx justify-center ">
        <img src={logotwo} alt="mobile image" className="rounded-2xl " />
       </div>
       <div>
        <p>product:Mobile</p>
        <p>price: ₹60,000</p>
        <p>Available</p>
       </div>
     </div>
     </div>
     <div className="bg-gray-600 rounded-2xl p-6 w-60 ml-5 transition-transform duration-1000 hover:scale-110 text-center mb-5  hover:text-red-600 mt-5" >
        <div>
      <div className="rounded-2xl p-4 felx justify-center ">
        <img src={logothree} alt="mobile image" className="rounded-2xl " />
       </div>
       <div>
        <p>product:Mobile</p>
        <p>price: ₹60,000</p>
        <p>Available</p>
       </div>
     </div>
     </div>
      <div className="bg-gray-600 rounded-2xl p-6 w-60 ml-5 transition-transform duration-1000 hover:scale-110 text-center mb-5  hover:text-red-600 ">
        <div>
      <div className="rounded-2xl p-4 felx justify-center ">
        <img src={logofour} alt="mobile image" className="rounded-2xl " />
       </div>
       <div>
        <p>product:Mobile</p>
        <p>price: ₹60,000</p>
        <p>Available</p>
       </div>
     </div>
     </div>
     <div className="bg-gray-600 rounded-2xl p-6 w-60 ml-5 transition-transform duration-1000 hover:scale-110 text-center mb-5  hover:text-red-600">
        <div>
      <div className="rounded-2xl p-4 felx justify-center ">
        <img src={logofive} alt="mobile image" className="rounded-2xl " />
       </div>
       <div>
        <p>product:Mobile</p>
        <p>price: ₹60,000</p>
        <p>Available</p>
       </div>
     </div>
     </div>
     <div className="bg-gray-600 rounded-2xl p-6 w-60 ml-5 transition-transform duration-1000 hover:scale-110 text-center mb-5  hover:text-red-600 ">
        <div>
      <div className="rounded-2xl p-4 felx justify-center ">
        <img src={logosix} alt="mobile image" className="rounded-2xl " />
       </div>
       <div>
        <p>product:Mobile</p>
        <p>price: ₹60,000</p>
        <p>Available</p>
       </div>
     </div>
     </div>
     <div className="bg-gray-600 rounded-2xl p-6 w-60 ml-5 transition-transform duration-1000 hover:scale-110 text-center mb-5  hover:text-red-600 ">
        <div>
      <div className="rounded-2xl p-4 felx justify-center ">
        <img src={logoseven} alt="mobile image" className="rounded-2xl " />
       </div>
       <div>
        <p>product:Mobile</p>
        <p>price: ₹60,000</p>
        <p>Available</p>
       </div>
     </div>
     </div>
   </div>
    
    
   </>
  )
}

export default Products
