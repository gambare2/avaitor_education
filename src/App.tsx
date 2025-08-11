import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Service from './component/Service'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import AviationTraining from './component/AvationTraining'
import Merchant_Navy from './component/Merchant_Navy'
import Hospitality from './component/Hospitality'

function App() {
  
  return (
 <BrowserRouter>
  <Routes>
    <Route path='/' element= {<Navbar/>}>
    <Route index element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/service' element={<Service />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/aviation' element={<AviationTraining/>}/>
    <Route path='/navy' element={<Merchant_Navy/>}/>
    <Route path='/hospitality' element={<Hospitality/>}/>
    </Route>
  </Routes>
 </BrowserRouter>
  )
}

export default App
