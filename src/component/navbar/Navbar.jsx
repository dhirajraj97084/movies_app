import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="div sticky top-0 z-10 md:flex lg:flex md:justify-between lg:justify-between py-2 items-center px-6 shadow-md">
        <div className="left">
           <h1 className='text-xl font-bold flex justify-center'>Movies</h1>
        </div>
        <div className="right">
           <ul className='flex gap-5 font-bold justify-center py-2 md:py-0 lg:py-0'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Products</li>
           </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
