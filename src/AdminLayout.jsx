import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/user/NotFound'
import AdminHeader from './components/admin/AdminHeader'
import AdminSideBar from './components/admin/AdminSideBar'
import ProductDashboard from './pages/admin/ProductDashboard'
const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <div className='flex '>
        <AdminSideBar />
        <Routes>
          {/* <Route path='/users' element={<DashBoard />} /> */}
          <Route path='/products' element={<ProductDashboard />} />

          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default AdminLayout
