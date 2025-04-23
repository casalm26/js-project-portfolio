import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Tech } from './components/Tech'
import { Media } from './components/Media'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

export const App = () => {
  return (
    <main>
      <Hero />
      <Tech />
      <Projects />
      <Media />
      <Skills />
      <Contact />
    </main>
  )
}

export default App;
