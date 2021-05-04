import React from 'react';
import image from '../bg.jpg'

function Home() {
  return (
    <main>
      <img src={image} alt="Background" className="absolute object-cover w-full h-full bg-gray-50"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name  ">Frontend Dev.</h1>
      </section>
    </main>
  )
}

export default Home
