import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to an in-page anchor after route changes (e.g. navigating from
// /faculty back to /#admission), or resets to the top for plain route changes.
export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        const timer = window.setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 0)
        return () => window.clearTimeout(timer)
      }
    }
    window.scrollTo({ top: 0 })
  }, [location.pathname, location.hash])

  return null
}
