import React from 'react'

export default function Portfolio() {
  return (
    <>
    <div className="  mt-24 ">
        <div className='w-1/2 mx-auto'>
        <h1 className=' mx-auto text-center text-4xl text-teal-900 p-4 font-bold pt-6 '>PORTFOLIO COMPONENT</h1>
        </div>
        <div className='flex  w-1/3 mx-auto justify-between m-2'>
                <div className='w-28 mx-auto h-1 bg-teal-900 mr-5 m-2'></div>
            <i className='fa fa-star mx-auto text-teal-900 text-xl'></i>
            <div className='w-28 mx-auto h-1 bg-teal-900 ml-5 m-2'></div>
            </div>
    </div>
    <div className="container mx-auto">
        <div className='flex flex-wrap '>
            <div className="w-1/3 p-5">
            <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className='rounded-md' alt="" />
            </div>
            <div className="w-1/3 p-5">
            <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className='rounded-md' alt="" />
            </div>
            <div className="w-1/3 p-5">
            <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className='rounded-md' alt="" />
            </div>
            <div className="w-1/3 p-5">
            <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className='rounded-md' alt="" />
            </div>
            <div className="w-1/3 p-5">
            <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className='rounded-md' alt="" />
            </div>
            <div className="w-1/3 p-5">
            <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className='rounded-md' alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}
