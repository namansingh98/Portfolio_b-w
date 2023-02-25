
import './App.css'
import Header from '../src/Components/Header/Header'
import Home from '../src/Components/Home/Home'
import Skills from '../src/Components/Skills/Skills'

import About from '../src/Components/About/About'
import Qualification from "../src/Components/Qualification"
import Contact from './Components/Contact'
import Footer from './Components/Footer/Footer'
import Scroll from './Components/scroll/Scroll'
import Service from './Components/Services/Service'
import Work from './Components/Work/Work'
function App() {

  

  return (
    <div className="App">
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Service/>
      <Qualification/>
      <Work/>
      <Contact/> 
    </main>
    <Footer/>
    <Scroll/>
    </div>
  )
}

export default App
