import Navigation from "./components/nav/nav"
import Hero from "./components/hero"
import Skills from "./components/skills/skills.jsx"
import About from "./components/about/about.jsx"
import Experience from "./components/experience/experience.jsx"
import Contact from "./components/contact/contact.jsx"
function App() {

  return (
    <main>
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}

export default App
