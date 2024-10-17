import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Details from './pages/Details'
import cars from './assets/db'
import Carspage from "./pages/Carspage";
import ContactPage from "./pages/Contact";


const App = () => {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cars={cars} />} />
        <Route path="/cars/:carModel" element={<Details cars={cars} />} />  
        <Route path="/cars" element={<Carspage cars={cars} />} /> 
        <Route path="/contact" element={<ContactPage />} />      
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
