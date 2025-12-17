import React from 'react'

export default function Hero() {
  return (
    <header className="bg-gray-2 h-screen overflow-hidden flex justify-center items-center">
      <div className="text-center w-3/4 ">
        <img src="/src/assets/logo.png" className="w-52 mx-auto" alt="Adham Gamal Logo" />
        <div className="container text-zinc-200">
          <h1 className="font-main text-3xl position-relative my-3 text-center z-10  font-bold">Launch <span className="text-blue-600">R</span>eact</h1>
          <p className="font-regular position-relative">LaunchR is a lightweight React 19 project designed to showcase core React fundamentals in a clean, beginner-friendly way.The project focuses on demonstrating essential concepts such as component-based architecture, routing, basic state handling, and project structure without unnecessary complexity or overengineering.</p> 
        </div> 
      </div>     
    </header>

  )
}
