import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Randon from './Compoments/Randon'
import Second from './Compoments/Second'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Number Matching Game</h1>
      <div className="card">
        {/* <Randon/> */}
        <Second/>
      </div>
    </>
  )
}

export default App
