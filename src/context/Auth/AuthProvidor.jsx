import { useState } from 'react'
import { AuthContext } from './AuthContext'
const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(
    localStorage.getItem('userName') ? localStorage.getItem('userName') : ''
  )
  const [token, setToken] = useState(
    localStorage.getItem('token') ? localStorage.getItem('token') : ''
  )

  const login = (userName, token) => {
    setUserName(userName)
    setToken(token)
    localStorage.setItem('userName', userName)
    localStorage.setItem('token', token)
  }
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    setUserName('')
    setToken('')
  }
  const isAuthenticated = !!token
  return (
    <AuthContext.Provider
      value={{ userName, token, login, isAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
