import { Facebook, Linkedin, Youtube } from 'lucide-react'
import React from 'react'

export default function Footer() {
    let copyRightYear = new Date().getFullYear()
  return (
    <>
      <footer className="bg-neutral-700 border-t-4 border-blue-600 text-zinc-300 md:flex justify-around items-center p-5">
        <p className="flex justify-center gap-3 my-2 md:my-0 font-main"> {copyRightYear} <span className="text-blue-600">LaunchR</span>. All rights reserved.</p>
        <div class="flex justify-center items-center my-2 md:my-0 gap-5">
            <a class="hover:text-blue-600 transition" href='https://www.facebook.com/profile.php?id=61585309791658&locale=ar_AR' target="_blank">
                <Facebook size={25} />
            </a>
            <a class="hover:text-blue-600 transition" href='https://www.linkedin.com/in/adhamgamal96/' target="_blank">
                <Linkedin size={25} />
            </a>
            <a class="hover:text-blue-600 transition" href='https://www.youtube.com/@AdhamGamal-f6i' target="_blank">
                <Youtube size={25} />
            </a>
        </div>
        <div className="flex justify-center items-center my-2 md:my-0 gap-5">
            <img src='/src/assets/logo.png' className="w-7" alt="Adham Gamal Logo" />
        </div>
      </footer>

    </>
  )
}
