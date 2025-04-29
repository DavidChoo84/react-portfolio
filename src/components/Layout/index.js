import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <div className="App">

      <Sidebar/>

      <div className="page">
        <Outlet />
        <span className="tags bottom-tags"><br /></span>
      </div>
    </div>
  )
}

export default Layout
