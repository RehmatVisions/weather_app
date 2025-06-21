 import React from 'react'
import Weather from './components/Weather'
import LeftWC from './components/LeftWC'

const App = () => {
  return (
    <div className='min-h-screen bg-blue-900 flex flex-col md:flex-row items-center justify-around p-4'>
      <LeftWC />
      <Weather />
    </div>
  )
}

export default App
