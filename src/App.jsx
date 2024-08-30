import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserLayout from './UserLayout'
import AdminLayout from './AdminLayout'
import { useAuth } from './context/Auth/AuthContext'
import LogIn from './pages/LogIn'
import axios from 'axios'
import { Spinner } from '@material-tailwind/react'

const App = () => {
  const { userData, token, setUserData } = useAuth()

  // dark light theme setup
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
  // user information fetching
  const [getData, setGetData] = useState(false)
  const getUserInfo = () => {
    setGetData(false)
    if (token) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res => {
          setUserData({
            name: res.data.name,
            email: res.data.email,
            role: res.data.role,
          })
          setGetData(true)
        })
        .catch(error => console.error('Error fetching user data:', error))
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [token])
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

        <Route
          path='/admin/*'
          element={
            userData.role == 'admin' ? (
              <AdminLayout />
            ) : getData ? (
              <LogIn />
            ) : (
              <div className='flex justify-center items-center h-screen'>
                <Spinner color='teal' className='h-12 w-12' />
              </div>
            )
          }
        />
      </Routes>
    </div>
  )
}
export default App
