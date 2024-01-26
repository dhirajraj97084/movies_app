import React from 'react'

function Cart() {
  return (
    <div>
      <div className="div flex flex-wrap ">

        <div className="sub_div w-full md:w-1/4 lg:w-1/4">
            <div className="inner border-2 border-gray-800 p-3 bg-cyan-700 m-5 rounded-md  shadow-md">
                <img src="https://dummyimage.com/720x400" alt="img" />
                <div className='flex justify-between px-5 py-2'>
                    <h1 className='font-bold text-white'>This is tital</h1>
                    <h2 className='font-bold text-white'>Docs</h2>
                </div>
            </div>
        </div>      

      </div>
    </div>
  )
}

export default Cart
