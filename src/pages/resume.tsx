import { useEffect, useState } from 'react'

type ResumeStatus = 'loading' | 'ready' | 'missing'

function ResumePage() {
  const [status, setStatus] = useState<ResumeStatus>('loading')

  useEffect(() => {
    let canceled = false
    const checkResume = async () => {
      try {
        const response = await fetch('/resume.pdf', { method: 'HEAD' })
        if (canceled) return
        const isPdf = response.headers.get('content-type')?.includes('pdf')
        setStatus(response.ok && isPdf ? 'ready' : 'missing')
      } catch (error) {
        if (!canceled) setStatus('missing')
      }
    }

    checkResume()
    return () => {
      canceled = true
    }
  }, [])

  return (
    <main>
      <div className="resume-container">
        <h1>Resume</h1>
        <div className="resume-wrapper">
          {status === 'ready' ? (
            <iframe src="/resume.pdf" className="resume-iframe" title="Resume PDF" />
          ) : (
            <div className="resume-fallback">

            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default ResumePage
