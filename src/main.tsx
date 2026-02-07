import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import HomePage from './pages/home'
import WorkPage from './pages/work'
import ResumePage from './pages/resume'
import TelevisionPage from './pages/television'
import DocumentaryPage from './pages/documentary'
import RadioPage from './pages/radio'
import SocialMediaPage from './pages/social'
import PrintPage from './pages/print'

function AppLayout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/television" element={<TelevisionPage />} />
        <Route path="/work/documentary" element={<DocumentaryPage />} />
        <Route path="/work/radio" element={<RadioPage />} />
        <Route path="/work/social" element={<SocialMediaPage />} />
        <Route path="/work/print" element={<PrintPage />} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(<App />)
