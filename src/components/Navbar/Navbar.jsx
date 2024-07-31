import React from 'react'

export default function Navbar() {
  return (
    <>
     <nav className="bg-teal-900 dark:bg-gray-900  w-full z-20 top-0 start-0 fixed">
  <div className=" container flex flex-wrap items-center justify-between mx-auto p-8">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      
      <h1 className="self-center text-4xl  text-white font-bold">Start Framework</h1>
    </a>
   
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       
        <li>
          <a href="/about" className="block py-2 px-3 text-xl text-gray-50 rounded hover:bg-gray-100  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="/portfolio" className="block py-2 px-3 text-xl text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Portfolio</a>
        </li>
        <li>
          <a href="/Contact" className="block py-2 px-3 text-xl text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
