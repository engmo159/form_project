import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <div>
      <div className='h-screen text-center text-white font-bold text-2xl  bg-teal-700 p-4'>
        <h1>DashBoard</h1>
        <ul className='flex flex-col items-center justify-evenly h-2/3 '>
          <li className='hover:text-black transition-all'>
            <Link to={'/admin/users'}>Users</Link>
          </li>
          <li className='hover:text-black transition-all'>
            <Link to={'/admin/products'}>Products</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdminSideBar
