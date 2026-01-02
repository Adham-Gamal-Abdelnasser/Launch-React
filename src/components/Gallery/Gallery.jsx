import React, { useState } from 'react'
import Feature from '../Feature/Feature';
import Layer from '../Layer/Layer';

export default function Gallery() {
    const [features, setFeatures] = useState([
        {id: 1, source: "./src/assets/r1.png", caption: "Represents the mindset of building React applications by understanding fundamentals first, focusing on clarity, intent, and a strong foundation before scaling"},
        {id: 2, source: "./src/assets/r2.png", caption: "Expresses how React encourages breaking interfaces into small, reusable components, making complex UIs easier to reason about, maintain, and evolve."},
        {id: 3, source: "./src/assets/r3.png", caption: "Highlights the importance of predictable state management and unidirectional data flow to keep applications stable, debuggable, and scalable."},
        {id: 4, source: "./src/assets/r4.png", caption: "Reflects how React Hooks simplify logic reuse and side effects, shifting development from lifecycle complexity to expressive, functional patterns."},
        {id: 5, source: "./src/assets/r5.png", caption: "Represents the idea that performance is not an afterthought—techniques like code splitting and lazy loading are intentional design decisions"},
        {id: 6, source: "./src/assets/r6.png", caption: "Expresses React’s focus on building interfaces that adapt to users, devices, and accessibility needs, not just screen sizes."},
    ]);
  return (
    <>
        <section className="min-h-screen bg-gray-2  flex justify-center items-center">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {features.map(feature => <Feature key={feature.id} feature={feature}/>)}                
            </div>
        </section>
        <Layer />
    </>
  )
}
