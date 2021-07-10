import logo from './logo.svg';
import './App.css';
import food from './assets/food.svg';
import { useEffect, useState } from 'react';

function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);
  })
  return (
    <div
      className="min-h-screen w-screen flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-around overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #F0F4FD, #A1A3BA)'
      }}>

      <div className={`${isAnimated ? 'scale-y-100' : 'scale-y-0'} mt-5 text-center lg:text-left transform transition duration-1000 ease-in-out`}>
        <h1 className="font-black text-5xl lg:text-6xl">Fresh Healthy
          <br />
          <span className="font-prompt font-light">Delicious Salads</span>
        </h1>
        <p className="text-base text-gray-700">We made fresh and healthy foods</p>
        <span className="inline-block bg-indigo-500 px-10 py-5 rounded shadow-lg uppercase text-lg tracking-wide mt-5">Explore</span>
      </div>
      <img className={`${isAnimated ? "scale-150" : 'translate-x-full translate-y-full'} w-screen lg:max-w-xl transform transition duration-1000 ease-in-out`} alt={food} src={food} />

    </div>
  );
}

export default App;
