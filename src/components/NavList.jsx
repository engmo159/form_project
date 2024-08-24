import DarkMode from './DarkMode'
import { Link, useLocation } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'
const NavList = ({ theme, setTheme }) => {
  const location = useLocation()
  return (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 '>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1  text-xl'
      >
        <Link to={'/'} className='flex items-center'>
          Home
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1  text-xl'
      >
        <Link to={'/products'} className='flex items-center'>
          Products
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1  text-xl'
      >
        <Link to={'/contact'} className='flex items-center'>
          Contact
        </Link>
      </Typography>
      {location.pathname !== '/login' && location.pathname !== '/signup' && (
        <Typography
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1  text-xl'
        >
          <Link
            to={'/login'}
            className='flex items-center bg-teal-700 px-4 py-1 rounded text-white hover:bg-teal-900 transition-all'
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
