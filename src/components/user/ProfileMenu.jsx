import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from '@material-tailwind/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useAuth } from '../../context/Auth/AuthContext'

const ProfileMenu = () => {
  const { userData, logout } = useAuth()
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)
  const logOutHandler = () => {
    logout()
    navigate('/')
    closeMenu()
  }
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button
          variant='text'
          color='blue-gray'
          className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'
        >
          <Typography>{userData.email}</Typography>
          <Avatar
            variant='circular'
            size='sm'
            alt={userData.email || ''}
            className='border border-gray-900 p-0.5'
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className='p-1'>
        <MenuItem
          onClick={closeMenu}
          className={`flex items-center gap-2 rounded `}
        >
          <Typography
            as='span'
            variant='small'
            className='font-normal'
            color={'inherit'}
          >
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={logOutHandler}
          className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus
          `}
        >
          <Typography
            as='span'
            variant='small'
            className='font-normal'
            color={'red'}
          >
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProfileMenu
