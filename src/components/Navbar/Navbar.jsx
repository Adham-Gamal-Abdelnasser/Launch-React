import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className='relative top-0 start-0 end-0 bg-gray-1 flex justify-around items-center py-4 text-zinc-200 font-main'>
        <h2 className='text-3xl'>Launch<span className='text-blue-600'>R</span></h2>
        <ul className='flex gap-5'>
          <li><a className='' href="http://">Home</a></li>
          <li><a className='' href="http://">About</a></li>
          <li><a className='' href="http://">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}
