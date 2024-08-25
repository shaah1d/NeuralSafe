import './App.css'
import Forgot from './Forgot';
import Hero from './Hero';
import Map from './Map';
import About from './About';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
    <Route path='/'>
      <Route index element={<Hero />} />
      <Route path='map' element={<Map />} />
      <Route path='forgot' element={<Forgot />} />
      <Route path='about' element={<About />} />
  
    </Route>
  </Routes>
  )
}

export default App
