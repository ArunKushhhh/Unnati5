import React from 'react'

const Details = () => {
  return (
    <div className='w-full hidden sm:flex justify-center items-center'>
      <div className="relative h-[600px] w-[90%] lg:w-1/2 z-10">
          <div className="w-full h-full bg-white/14 rounded-3xl py-4 px-4 flex flex-col gap-4">
            <div className="flex gap-1.5"> 
              <div className="w-4 h-4 rounded-full bg-red-400"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <div className="w-4 h-4 rounded-full bg-green-400"></div>
            </div>
            <div className="w-full h-full bg-white rounded-2xl"></div>

          </div>
          <div className="absolute w-full h-full bg-blue-500/40 blur-3xl -z-10 -top-16 -left-32"></div>
        </div>
    </div>
  )
}

export default Details
