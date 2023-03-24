import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import RootRoute from '../components/RootRoute'
import Post from '../pages/Post'
import NotFound from '../pages/NotFound'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<RootRoute />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp
