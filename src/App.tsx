import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Faculty from './pages/Faculty'
import Scholarship from './pages/Scholarship'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/scholarship" element={<Scholarship />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
