import React from 'react'

const Button = ({ text }) => {
  return (
    <div className='mt-12'>
        <button className='bg-[#B6F09C] h-12 py-2 px-6 w-full rounded-lg text-[#0C1132] font-semibold'>{text}</button>
    </div>
  )
}

export default Button