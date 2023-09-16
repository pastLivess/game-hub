import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
export default function Layout(): JSX.Element {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
