import React from 'react'

export default function NavigationLink({link}) {
  return (
    <>
        <li>
            <a className='flex gap-1' href="http://"><link.icon size={25}/> {link.name}</a>
        </li> 
    </>
  )
}
