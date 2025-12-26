import React from 'react'

export default function NavLink({link}) {
  return (
    <>
        <li>
            <a className='flex gap-1' href="http://"><link.icon size={25}/> {link.name}</a>
        </li> 
    </>
  )
}
