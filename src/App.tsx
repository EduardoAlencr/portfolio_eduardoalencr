import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { GitHubRepos } from './components/sections/GitHubRepos'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { projects } from './data/projects'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects projects={projects} />
        <GitHubRepos />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
