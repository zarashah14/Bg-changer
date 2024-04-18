import React from 'react'
// import Container from '../../Container/Container'
import Lock from '../../assests/Lock.png'
import Logo from '../../assests/logo1.png'
import Shape from '../../assests/Ellipse 2.png'
import Shape2 from '../../assests/arrow.png'
import Shape3 from '../../assests/Shape3.png'
import Shape4 from '../../assests/Group 5.png'
function Home() {
  return (
    <>
    <div className='relative'>
       
       <div className='flex items-end justify-end absolute top-0 right-0'>
        <img src={Shape} alt="Shape" className="w-full" />
        </div>

       <div className='Nav grid sm:grid-cols-1 lg:grid-cols-3 relative z-10 py-6 px-20'>
       
        <div className='flex'>
        <img src={Logo} alt="Logo" />
        </div>

        <div>
            <ul className='flex items-center justify-center gap-8'>
            <li>Breakfast</li>
            <li>lunch</li>
            <li>Dinner</li>
            </ul>
        </div>

        <div className='flex items-end justify-center'>
        <img src={Lock} alt="Lock" />
        </div>

        </div> 
       </div>
          
          <div className='Main grid grid-cols-2 absolute my-40'>
             <div className='Text flex flex-col items-start justify-center p-14'>      
              <h1 className='text-2xl font-semibold leading-66 text-left text-[#FF922C]'>$32</h1>
              <h1 className='text-xl font-semibold pt-2'>Green Goddess </h1>
              <h1 className='text-xl font-semibold'>Chicken Salad</h1> 
              <p className='text-sm font-normal text-left pt-2'>It is a non vegetarian salad which consists of the green<br></br>
              goddess dressing mixed with chicken, peppers,<br></br> olives and celery.</p>
              {/* <button class="t-6 bg-yellow-500 rounded px-4 py-2">
                 ORDER NOW
                </button> */}
                <div className="shadow-[0px_20px_40px_0px_#F4E2D1] rounded-[69px] bg-[#FF922C] relative m-[0_0_17px_0] flex flex-row justify-center self-start p-[14px_10.7px_14px_0] w-[163px] box-sizing-border top-6">
                    <span className="break-words font-['Poppins'] font-bold text-[13px] capitalize text-[#FFFFFF]">
                    ORDER NOW
                    </span>
                </div>

            </div>

           <div className='flex items-center justify-center '>
              
           <div className="absolute">
                    <div className="relative top-0">
                        <div className="flex items-center justify-center py-10">
                        <img src={Shape4} alt="Shape" className="" />
                        </div>
                    </div>
                     
                     <div className="absolute">
                    <div className="relative top-0 flex items-center justify-center">
                    <img src={Shape3} alt="Shape" className="" />
                    </div>
                    </div>
                </div>

            <div className="flex flex-row justify-between self-end w-[602px] box-sizing-border m-20  ">
                <div>
                <img src={Shape2} alt="Shape" className="" />
                </div>

                <div>
                <img src={Shape2} alt="Shape" className="" />
                </div>
            </div>
             
                  
            {/* <span className="self-start break-words font-normal text-[13.2px] capitalize text-[#000000]">
                Watch the Video
            </span> */}
                {/* <div className="absolute">
                    <div className="relative">
                        <div className="">
                        <img src={Shape4} alt="Shape" className="" />
                        </div>
                    </div>
            
                    <div className="absolute">
                    <img src={Shape3} alt="Shape" className="relative" />
                    </div>
                    
                </div> */}

           </div>
       </div>
       </>
  )
}

export default Home
