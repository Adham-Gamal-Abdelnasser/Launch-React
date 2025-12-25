import { Facebook, Linkedin, Youtube } from 'lucide-react'
import React from 'react'
import SocialLink from '../SocialLink/SocialLink'

export default function Footer() {
  let copyRightYear = new Date().getFullYear()
  let [webLinks, setWebLinks] = React.useState([
    {icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61585309791658&locale=ar_AR', id: 1},
    {icon: Linkedin, url: 'https://www.linkedin.com/in/adhamgamal96/', id: 2},
    {icon: Youtube, url: 'https://www.youtube.com/@AdhamGamal-f6i', id: 3},
  ])
  return (
    <>
      <footer className="bg-neutral-700 border-t-4 border-blue-600 text-zinc-300 md:flex justify-around items-center p-5">
        <p className="flex justify-center gap-3 my-2 md:my-0 font-main"> {copyRightYear} <span className="text-blue-600">LaunchR</span>. All rights reserved.</p>
        <div className="flex justify-center items-center my-2 md:my-0 gap-5">
            {webLinks.map(link => <SocialLink key={link.id} link={link}></SocialLink>)}
        </div>
        <div className="flex justify-center items-center my-2 md:my-0 gap-5">
            <img src='/src/assets/logo.png' className="w-7" alt="Adham Gamal Logo" />
        </div>
      </footer>

    </>
  )
}
