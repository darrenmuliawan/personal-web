import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { About, Canvas, Introduction } from './ui'
import { Articles } from './ui/Articles'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // set scroll to horizontal
    const app = document.getElementById('app');
    app?.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        app.scrollLeft += 30;
        e.preventDefault();
      } else {
        app.scrollLeft -= 30;
        e.preventDefault();
      }
    })
  }, [])

  return (
    <div id='app' className="app">
      <Canvas>
        <Introduction />
        <About />
        <Articles />
      </Canvas>
      <Canvas>
        <Introduction />
        <About />
        <Articles />
      </Canvas>
    </div>
  )
}

export default App
