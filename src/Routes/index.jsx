import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import RootRoute from '../components/RootRoute'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<RootRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Route>
        <Route path="*" element={<h1>Deu Ruim Aqui 404</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp
