import React from 'react'

const Loader = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
        <div className='w-[10vw] h-[10vw] rounded-full'>Loading...</div>
    </div>
  )
}

export default Loader