import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LotteryGame from './LotteryGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LotteryGame/>
    </>
  )
}

export default App
