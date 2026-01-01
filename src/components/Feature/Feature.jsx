import React from 'react'

export default function Feature({feature}) {
  return (
    <>
      <figure className="overflow-hidden relative rounded-4xl h-80">
            <img src={feature.source} className="w-full" alt="feature image" />
            <figcaption className="bg-neutral-800 absolute flex justify-center items-center text-center w-full font-main top-0 bottom-0 text-white opacity-0 hover:opacity-70 transition-all duration-300 cursor-pointer">{feature.caption}</figcaption>
        </figure>
    </>
  )
}
