import React, { useState, useEffect } from 'react'
import About from './Components/About.jsx';
import Workshops from './Components/Workshops.jsx';
import LoadingScreen from './Components/LoadingScreen.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen w-full flex flex-col gap-6 items-center justify-start overflow-x-hidden bg-linear-to-tr from-primary to-black text-secondary font-primary py-10">
      <h1 className='text-9xl'>NAVIRA 2.0</h1>
      <About />
      <Workshops />
      <About />
    </div>
  )
}

export default App