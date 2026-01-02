import React, { useState } from 'react'

export default function Field({ inputDetails }) {
  const [isTyping, setIsTyping] = useState(false)

  const handleChange = (e) => {
    if(e.target.value.length > 0) {
      setIsTyping(true)
    } else {
      setIsTyping(false)
    }
  }
  return (
    <div className="relative z-10 w-full py-5">
      <input type={inputDetails.type} id={inputDetails.inputId} onChange={handleChange} className="w-full p-3 border text-white border-gray-400 rounded-md focus:outline-none focus:border-blue-600 transition-all duration-300"/>
      <label htmlFor={inputDetails.inputId} className={`absolute text-sm font-main left-3 transition-all duration-400 ease-in-out ${isTyping ? 'top-[-10px]  text-blue-600' : 'top-1/2 -translate-y-1/2  text-gray-500 '}`}>{inputDetails.labelName}</label>
    </div>
  )
}
