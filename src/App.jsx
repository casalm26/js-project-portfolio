import React from 'react'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Tech } from './components/Tech'
import { Media } from './components/Media'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { GlobalStyles } from './components/GlobalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Hero />
        <Tech />
        <Projects />
        <Skills />
        <Media />
        <Contact />
      </main>
    </>
  )
}

export default App;
