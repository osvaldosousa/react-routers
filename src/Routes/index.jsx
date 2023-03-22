
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Menu from '../components/Menu'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path='*' element={<h1>Deu Ruim Aqui 404</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp