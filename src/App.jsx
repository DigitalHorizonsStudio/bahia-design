import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Partners } from './pages/Partners'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Jobs } from './pages/Jobs';
import  ServicesComponent  from './components/ServicesComponent';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services/:title" element={
        <ServicesComponent />
        } />
        <Route path="/works" element={<Jobs />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
