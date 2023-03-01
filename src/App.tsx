import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { About, Canvas, Introduction } from './ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Canvas>
        <Introduction />
        <About />
      </Canvas>
    </div>
  )
}

export default App
