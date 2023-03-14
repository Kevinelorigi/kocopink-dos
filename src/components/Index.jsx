import React from 'react'
import HeroImage from '../img/HeroImage.png'


const Index = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-white to-pink-200"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-pink-400">
            Calidad y elegancia hecho con amor!
          </h2>         
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Index