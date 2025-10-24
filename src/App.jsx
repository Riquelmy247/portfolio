import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  )
}

export default App
