import React from 'react'

export default function SocialLink({link}) {
  return (
    <a className="hover:text-blue-600 transition" href={link.url} target="_blank">
        <link.icon size={25} />
    </a>
  )
}
