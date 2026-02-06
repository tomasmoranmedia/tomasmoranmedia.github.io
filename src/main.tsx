import { useEffect, useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import WorkPage from './pages/work'
import ResumePage from './pages/resume'
import TelevisionPage from './pages/television'
import DocumentaryPage from './pages/documentary'
import RadioPage from './pages/radio'
import SocialMediaPage from './pages/social'
import PrintPage from './pages/print'

const workSections: string[] = []

function App() {
  const [hash, setHash] = useState<string>(() => window.location.hash || '#home')

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#home')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isWork = hash === '#work' || workSections.includes(hash)

  useEffect(() => {
    if (isWork && workSections.includes(hash)) {
      const id = hash.slice(1)
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash, isWork])

  let content: React.ReactNode

  if (hash === '#resume') {
    content = (
      <>
        <Navbar />
        <ResumePage />
        <Footer />
      </>
    )
  } else if (hash === '#radio') {
    content = (
      <>
        <Navbar />
        <RadioPage />
        <Footer />
      </>
    )
  } else if (hash === '#print') {
    content = (
      <>
        <Navbar />
        <PrintPage />
        <Footer />
      </>
    )
  } else if (hash === '#social-media') {
    content = (
      <>
        <Navbar />
        <SocialMediaPage />
        <Footer />
      </>
    )
  } else if (hash === '#documentary') {
    content = (
      <>
        <Navbar />
        <DocumentaryPage />
        <Footer />
      </>
    )
  } else if (hash === '#television') {
    content = (
      <>
        <Navbar />
        <TelevisionPage />
        <Footer />
      </>
    )
  } else if (isWork) {
    content = (
      <>
        <Navbar />
        <WorkPage />
        <Footer />
      </>
    )
  } else if (hash === '#about') {
    content = (
      <>
        <Navbar />
        <AboutPage />
        <Footer />
      </>
    )
  } else {
    content = (
      <>
        <Navbar />
        <HomePage />
        <Footer />
      </>
    )
  }

  return content
}

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(<App />)
