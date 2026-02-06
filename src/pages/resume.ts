export function createResumePage(): string {
  return `
    <main>
      <div class="resume-container">
        <h1>Resume</h1>
        <div class="resume-wrapper">
          <div id="resume-loading" class="resume-fallback">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </main>
  `
}

export async function setupResumeIframe() {
  const wrapper = document.querySelector('.resume-wrapper')
  const loading = document.getElementById('resume-loading')
  
  if (!wrapper || !loading) return
  
  try {
    const response = await fetch('/resume.pdf', { method: 'HEAD' })
    
    if (response.ok && response.headers.get('content-type')?.includes('pdf')) {
      // PDF exists, show iframe
      wrapper.innerHTML = `
        <iframe 
          src="/resume.pdf" 
          class="resume-iframe"
          title="Resume PDF">
        </iframe>
      `
    } else {
      // PDF doesn't exist or isn't a PDF
      wrapper.innerHTML = `
        <div class="resume-fallback">
          <p>Upload resume to public/resume.pdf</p>
        </div>
      `
    }
  } catch (error) {
    // Error fetching, show fallback
    wrapper.innerHTML = `
      <div class="resume-fallback">
        <p>Upload resume to public/resume.pdf</p>
      </div>
    `
  }
}
