
import '../src/components/animations.css';
import './App.css'
import HeroSection from './components/HeroSection'

import Navbar from './components/Navbar'

function App() {
  return (
    <div className=' bg-black'>
       <div>
        <Navbar/>
        </div>
        <div className=' bg-black'>
        <HeroSection/>
       </div>


    </div>
  )
}

export default App
