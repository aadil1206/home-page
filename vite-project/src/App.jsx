import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Faq from './components/Faq'
import Works from './components/DjWorks'
import Testimonials from './components/Testimonials'
import Navbar from './components/Navbar'
import Cases from './components/Cases'
import DjTool from './components/DjTool'
import WebApp from './components/WebApp'
import Video from './components/Video'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
     <Navbar/> 
     <Works/>  
     <Cases/>  

      <DjTool/>
    <WebApp/>  
      <Video/>  
      <Gallery/>
    <Testimonials/>

      <Faq/>
    
    
    
  <Footer/>  
     
   
   
      </div>
  )
}

export default App
