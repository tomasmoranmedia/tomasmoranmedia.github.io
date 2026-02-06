import './style.css'
import { createNavbar } from './components/navbar'
import { createFooter } from './components/footer'
import { createHomePage } from './pages/home'
import { createAboutPage } from './pages/about'
import { createWorkPage } from './pages/work'
import { createResumePage, setupResumeIframe } from './pages/resume'

function render() {
  const app = document.querySelector<HTMLDivElement>('#app')!
  const hash = window.location.hash
  
  // Work page section hashes
  const workSections = ['#radio', '#print', '#television', '#social-media', '#documentary']
  
  let content = ''
  
  if (hash === '#resume') {
    content = createNavbar() + createResumePage() + createFooter()
  } else if (hash === '#work' || workSections.includes(hash)) {
    content = createNavbar() + createWorkPage() + createFooter()
  } else if (hash === '#about') {
    content = createNavbar() + createAboutPage() + createFooter()
  } else {
    content = createNavbar() + createHomePage() + createFooter()
  }
  
  app.innerHTML = content
  
  // Setup resume iframe if on resume page
  if (hash === '#resume') {
    setupResumeIframe()
  }
  
  // Scroll to section if on work page with section hash
  if (workSections.includes(hash)) {
    setTimeout(() => {
      const section = document.querySelector(hash)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0)
  }
}

window.addEventListener('hashchange', render)
render()
