import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { About, Canvas, Experience, Introduction } from './ui'
import { Articles } from './ui/Articles'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // set scroll to horizontal
    const app = document.getElementById('canvas');
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
        <Experience />
        <Introduction />
        <About />
        <Articles />
        <Experience />
      </Canvas>
    </div>
  )
}

export default App
