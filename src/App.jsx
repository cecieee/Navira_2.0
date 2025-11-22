import React from 'react'
import IndustrialVisits from "./iv";  
import WhyNavira from "./whynavira";  // Correct import

function App() {
  return (
    <>
      <div className="h-screen w-screen overflow-y-auto flex flex-col gap-6 items-center justify-center overflow-x-hidden bg-linear-to-tr from-primary to-black text-secondary font-primary">
        <h1 className='text-9xl'>NAVIRA 2.0</h1>
      </div>

      <IndustrialVisits />
      <WhyNavira />   {/* Correct component usage */}
    </>
  )
}

export default App;
