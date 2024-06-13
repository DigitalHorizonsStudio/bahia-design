import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { CarouselBrands } from './components/CarouselBrands'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<CarouselBrands />} />
      </Routes>
    </Router>
  )
}

export default App
