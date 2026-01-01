import React from 'react'

export default function Contact() {
  return (
    <>
        <section className="py-24 bg-gray-2">
            <div className="w-3/4 mx-auto">
                <form>
                    <div className="relative z-10 w-full py-5 text-white">
                        <input type="text" id='' className='w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 transition-all duration-300' />
                        <label htmlFor="" className='absolute font-main left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-300'></label>
                    </div>
                    <div className="relative z-10 w-full py-5 text-white">
                        <input type="text" id='' className='w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 transition-all duration-300' />
                        <label htmlFor="" className='absolute font-main left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-300'></label>
                    </div>
                    <div className="relative z-10 w-full py-5 text-white">
                        <input type="text" id='' className='w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 transition-all duration-300' />
                        <label htmlFor="" className='absolute font-main left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-300'></label>
                    </div>
                    <div className="relative z-10 w-full py-5 text-white">
                        <input type="text" id='' className='w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 transition-all duration-300' />
                        <label htmlFor="" className='absolute font-main left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-300'></label>
                    </div>
                    <button className="w-full font-main bg-transparent p-2 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">Submit</button>
                </form>
            </div>
        </section>

    </>
  )
}
