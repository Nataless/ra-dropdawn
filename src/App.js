import { useState } from 'react'
import './App.css'
import Dropdown from './components/Dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Dropdown/>
  )
}

export default App