import lo from "../Images/1.jpg"

const Producthero = () => {
  return (
    <>
        
     <div className="flex items-center" id="Product">
         <div className="w-1000">
          <img src={lo} alt="mobile image" />
         </div>
       
         <div className="flex flex-col">
           <h2 className="font-bold mt-5 ml-80 mb-10">Key Mobile Technology Trends & Innovations</h2>
           <p>• On-Device AI & Assistant Integration: Modern operating systems and flagships—like the Pixel 11 series and Samsung Galaxy Z Fold8/Flip8 lineups—deeply bake AI intelligence for real-time processing, smart multitasking, and contextual safety.
• Foldable & Form-Factor Evolution: Flexible OLED panels have matured into ultra-durable foldables (such as the Vivo X Fold 6 and Samsung Galaxy Z Fold8/Flip8), offering tablet-sized screens in pocketable frames.
• Display & Battery Leaps: Flagship and mid-range devices increasingly feature high-refresh OLED panels (up to 165Hz) paired with ultra-high-capacity power cells (ranging from 7,000mAh up to 10,000mAh in select new releases).
• Next-Gen Connectivity & IoT: Widespread 5G integration and growing mobile Internet of Things (IoT) deployments continue to speed up data transfer and device ecosystem synchronicity</p>
         </div>
     </div>
    </>
  )
}

export default Producthero
