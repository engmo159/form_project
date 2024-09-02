import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigateHook = useNavigate()

  return (
    <div className='text-center'>
      NotFound
      <button onClick={() => navigateHook('/')}>Back To Home</button>
    </div>
  )
}

export default NotFound
