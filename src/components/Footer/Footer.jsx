import React from 'react'

export default function Footer() {
  return (
    <>
    
<div className='bg-slate-800 pt-24 pb-24'>
    <div className="container mx-auto ">
        <div className="flex">
            <div className='flex flex-col justify-between items-center mr-24 ml-24'>
                <h2 className='text-3xl text-white'>Location</h2>
                <p className='pt-4 text-white'>2215 John Daniel Drive</p>
                <p className='pt-4 text-white'>Clark, MO 65243</p>
            </div>
            <div className='flex flex-col justify-between items-center ml-24 mr-24'>
                <h2 className='text-3xl text-white font-bold'>AROUND THE WEB</h2>
                <div className='flex gap-4 m-2'>
                
                    <div className='rounded-full grid h-10 w-10 border-solid border-white border-y border'><i className='fa-brands fa-facebook-f icon m-auto text-white cursor-pointer'></i></div>
                    <div className='rounded-full grid h-10 w-10 border-solid border-white border-y border'><i className='fa-brands fa-twitter icon m-auto text-white cursor-pointer'></i>
                    </div>
                    <div className='rounded-full grid h-10 w-10 border-solid border-white border-y border'><i className='fa-brands fa-linkedin-in icon m-auto text-white cursor-pointer' ></i></div>
                    <div className='rounded-full grid h-10 w-10 border-solid border-white border-y border'><i className='fa-brands fa-youtube icon m-auto text-white cursor-pointer'></i></div>
                </div>

            </div>
            <div className='flex flex-col justify-between items-center mr-24'>
                <h2 className='text-3xl text-white font-bold'>ABOUT FREELANCER</h2>
                <p className='pt-4 text-white'>Freelance is a free to use, licensed Bootstrap theme</p>
                <p className='pt-4 text-white'>created by Route</p>
            </div>
        </div>
    </div>
</div>

    </>
  )
}
