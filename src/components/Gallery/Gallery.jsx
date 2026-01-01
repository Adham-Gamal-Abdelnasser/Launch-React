import React from 'react'

export default function Gallery() {
  return (
    <>
        <section className="min-h-screen bg-gray-2  flex justify-center items-center">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">

                <figure className="overflow-hidden relative rounded-4xl h-80">
                    <img src='./src/assets/r1.png' className="w-full" alt="feature image" />
                    <figcaption className="bg-neutral-800 absolute flex justify-center items-center text-center w-full font-main top-0 bottom-0 text-white opacity-0 hover:opacity-70 transition-all duration-300 cursor-pointer">Represents the mindset of building React applications by understanding fundamentals first, focusing on clarity, intent, and a strong foundation before scaling</figcaption>
                </figure>
                <figure className="overflow-hidden relative rounded-4xl h-80">
                    <img src='./src/assets/r2.png' className="w-full" alt="feature image" />
                    <figcaption className="bg-neutral-800 absolute flex justify-center items-center text-center w-full font-main top-0 bottom-0 text-white opacity-0 hover:opacity-70 transition-all duration-300 cursor-pointer">Expresses how React encourages breaking interfaces into small, reusable components, making complex UIs easier to reason about, maintain, and evolve.</figcaption>
                </figure>
                <figure className="overflow-hidden relative rounded-4xl h-80">
                    <img src='./src/assets/r3.png' className="w-full" alt="feature image" />
                    <figcaption className="bg-neutral-800 absolute flex justify-center items-center text-center w-full font-main top-0 bottom-0 text-white opacity-0 hover:opacity-70 transition-all duration-300 cursor-pointer">Highlights the importance of predictable state management and unidirectional data flow to keep applications stable, debuggable, and scalable.</figcaption>
                </figure>
                <figure className="overflow-hidden relative rounded-4xl h-80">
                    <img src='./src/assets/r4.png' className="w-full" alt="feature image" />
                    <figcaption className="bg-neutral-800 absolute flex justify-center items-center text-center w-full font-main top-0 bottom-0 text-white opacity-0 hover:opacity-70 transition-all duration-300 cursor-pointer">Reflects how React Hooks simplify logic reuse and side effects, shifting development from lifecycle complexity to expressive, functional patterns.</figcaption>
                </figure>
                <figure className="overflow-hidden relative rounded-4xl h-80">
                    <img src='./src/assets/r5.png' className="w-full" alt="feature image" />
                    <figcaption className="bg-neutral-800 absolute flex justify-center items-center text-center w-full font-main top-0 bottom-0 text-white opacity-0 hover:opacity-70 transition-all duration-300 cursor-pointer">Represents the idea that performance is not an afterthought—techniques like code splitting and lazy loading are intentional design decisions.</figcaption>
                </figure>
                <figure className="overflow-hidden relative rounded-4xl h-80">
                    <img src='./src/assets/r6.png' className="w-full" alt="feature image" />
                    <figcaption className="bg-neutral-800 absolute flex justify-center items-center text-center w-full font-main top-0 bottom-0 text-white opacity-0 hover:opacity-70 transition-all duration-300 cursor-pointer">Expresses React’s focus on building interfaces that adapt to users, devices, and accessibility needs, not just screen sizes.</figcaption>
                </figure>
                
            </div>
        </section>
    </>
  )
}
