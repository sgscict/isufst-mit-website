import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToHash from './ScrollToHash'

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="page-backdrop" aria-hidden="true" />
      <ScrollToHash />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
