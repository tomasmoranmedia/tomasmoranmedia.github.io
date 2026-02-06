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
  
  let content = ''
  
  if (hash === '#resume') {
    content = createNavbar() + createResumePage() + createFooter()
  } else if (hash === '#work') {
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
}

window.addEventListener('hashchange', render)
render()
