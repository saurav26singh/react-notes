import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-full'style={{backgroundColor: color}}>
      {/* <button onClick={() => setColor("red")}>red</button> */}
    </div>
  )
}

export default App
