import React from 'react'

export default function Field({inputDetails}) {
  return (
    <>
        <div className="relative z-10 w-full py-5 text-white">
            <input type={inputDetails.type} id={inputDetails.inputId} className='w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 transition-all duration-300' />
            <label htmlFor={inputDetails.inputId} className='absolute font-main left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-300'>{inputDetails.labelName}</label>
        </div>
    </>
  )
}
