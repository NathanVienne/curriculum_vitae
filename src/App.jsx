import Navigation from "./components/nav/nav"
import Hero from "./components/hero"
import About from "./components/about/about.jsx"
import Experience from "./components/experience/experience.jsx"
import Test from "./components/about/card_test.jsx"
function App() {

  return (
    <main>
      <Navigation />
      <Hero />
      <Experience />
      <About />
      {/* <div>
        < Test />
      </div> */}
    </main>
  )
}

export default App
