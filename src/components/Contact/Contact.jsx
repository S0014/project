import React from 'react'

export default function Contact() {
  return (
    <>
    
  <div className="  mt-24  ">
        <div className='w-1/2 mx-auto'>
        <h1 className=' mx-auto text-center text-4xl text-teal-900 p-4 font-bold pt-6 '>CONATCT SECTION</h1>
        </div>
        <div className='flex  w-1/3 mx-auto  m-2'>
                <div className='w-20 mx-auto h-1 bg-teal-900 pl-10 '></div>
            <i className='fa fa-star mx-auto text-teal-900 text-xl'></i>
            <div className='w-20 mx-auto h-1 bg-teal-900  '></div>
            </div>
    </div>
  <div className="container mx-auto w-3/4">
  <form>
  <div className='mt-3'>
  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">user name</label>
  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user name" required />
</div>

<div className='mt-3'>
  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">user age</label>
  <input type="age" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678"  required />
</div>



    <div className='mt-3'>
      <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">UserEmail</label>
      <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="userEmail" />
      
    </div>
    <div className="mb-6 mt-3">
  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User password</label>
  <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User password" required />
</div>

<button className='bg-blue-600 mb-20 border-blue-400 border-s p-3 rounded-md hover:text-white hover:bg-blue-900 transition-all duration-300'>send massege</button>

    
    
      </form>
  </div>

    
    </>
  )
}
