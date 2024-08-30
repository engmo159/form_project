import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/products'
import Contact from './pages/contact'
import LogIn from './pages/login'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'

const UserLayout = ({ theme, setTheme }) => {
  return (
    <div>
      <Header setTheme={setTheme} theme={theme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LogIn theme={theme} />} />
        <Route path='/signup' element={<SignUp theme={theme} />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default UserLayout
