import { HouseIcon, ImagesIcon, InfoIcon, PhoneIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import NavigationLink from '../NavigationLink/NavigationLink'

export default function Navbar() {
  let [navLinks , setNavLinks] = useState([
    {name: 'Home', icon: HouseIcon, path: '/home', id: 0},
    {name: 'About', icon: InfoIcon, path: '/about', id: 1},
    {name: 'Contact', icon: PhoneIcon, path: '/contact', id: 2},
    {name: 'Gallery', icon: ImagesIcon, path: '/gallery', id: 3}, 
  ])
  function handleScrolling(){
    const nav = document.querySelector('nav')
    if (window.scrollY > 0) {
      nav.classList.replace('py-4', 'py-2')
    } else{
      nav.classList.replace('py-2', 'py-4')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrolling)
    return () => {
      window.removeEventListener("scroll", handleScrolling)
    }
  }, []);
  return (
    <>
      <nav className='fixed z-50 top-0 start-0 end-0 bg-gray-1 flex justify-around items-center py-4 text-zinc-200 font-main transition-all duration-300'>
        <h2 className='text-3xl'>Launch<span className='text-blue-600'>R</span></h2>
        <ul className='flex gap-5'>
          {navLinks.map(link => <NavigationLink key={link.id} link={link}/>)}
        </ul>
      </nav>
    </>
  )
}
