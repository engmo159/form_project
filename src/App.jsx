import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserLayout from './UserLayout'
import AdminLayout from './AdminLayout'

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
      <Routes>
        <Route
          path='/*'
          element={<UserLayout theme={theme} setTheme={setTheme} />}
        />
        <Route path='/admin/*' element={<AdminLayout />} />
      </Routes>
    </div>
  )
}
export default App
