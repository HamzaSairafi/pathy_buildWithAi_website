import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import LearningJourney from './components/LearningJourney'
import Programs from './components/Programs'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './styles.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">تجاوز إلى المحتوى الرئيسي</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Features />
        <LearningJourney />
        <Programs />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
