import React from 'react'

export default function Layer() {
  return (
    <div className='fixed top-0 bottom-0 start-0 end-0 z-50 bg-neutral-800/85 text-white flex justify-center items-center'>
      <figure className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 p-5 container'>
        <img src="./src/assets/r1.png" className='rounded-2xl' alt="" />
        <figcaption className='p-5 rounded-2xl font-main flex justify-center items-center text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, at iure nemo numquam illum quia enim deleniti amet natus ab eum accusamus consequatur. Rerum adipisci exercitationem, doloribus vitae quo ratione!</figcaption>
      </figure>
    </div>
  )
}
