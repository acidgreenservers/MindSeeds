import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import CogniSeedsPage from './pages/CogniSeeds/CogniSeedsPage'
import LinguaSeedsPage from './pages/LinguaSeeds/LinguaSeedsPage'
import ArchSeedsPage from './pages/ArchSeeds/ArchSeedsPage'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cogni" element={<CogniSeedsPage />} />
        <Route path="/lingua" element={<LinguaSeedsPage />} />
        <Route path="/arch" element={<ArchSeedsPage />} />
      </Routes>
    </Router>
  )
}

export default App
