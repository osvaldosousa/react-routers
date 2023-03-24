import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import RootRoute from '../components/RootRoute'
import Post from '../pages/Post'
import NotFound from '../pages/NotFound'
import ScrollToTop from 'src/components/ScrollToTop'

function RoutesApp() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<RootRoute />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp
