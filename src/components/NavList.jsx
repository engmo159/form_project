import DarkMode from './DarkMode'
import { Link } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'
import { useAuth } from '../context/Auth/AuthContext'
import ProfileMenu from './ProfileMenu'

const NavList = ({ theme, setTheme }) => {
  const { isAuthenticated } = useAuth()
  return (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 '>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1  text-xl'
      >
        <Link
          to={'/'}
          className={`flex items-center hover:scale-105 ${
            location.pathname == '/' && 'text-teal-800 font-bold'
          }`}
        >
          Home
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1  text-xl'
      >
        <Link
          to={'/products'}
          className={`flex items-center hover:scale-105 ${
            location.pathname == '/products' && 'text-teal-800 font-bold'
          }`}
        >
          Products
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1  text-xl'
      >
        <Link
          to={'/contact'}
          className={`flex items-center hover:scale-105 ${
            location.pathname == '/contact' && 'text-teal-800 font-bold'
          }`}
        >
          Contact
        </Link>
      </Typography>
      {isAuthenticated ? (
        <ProfileMenu />
      ) : (
        <Typography
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1  text-xl'
        >
          <Link
            to={'/login'}
            className={`flex items-center bg-teal-700 px-4 py-1 rounded text-white hover:bg-teal-900 transition-all `}
          >
            Log In
          </Link>
        </Typography>
      )}

      <DarkMode setTheme={setTheme} theme={theme} />
    </ul>
  )
}

export default NavList
