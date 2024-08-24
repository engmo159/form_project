import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import { useEffect, useState } from 'react'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

const App = () => {
  const [theme, setTheme] = useState('')
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [theme])
  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-black text-white dark' : 'bg-white text-black'
      } min-h-screen`}
    >
      <Header setTheme={setTheme} theme={theme} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<LogIn theme={theme} />}></Route>
        <Route path='/signup' element={<SignUp theme={theme} />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}
export default App
