import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../shared/context/auth-context'
export default function NavLinks(props) {


  const {isLoggedIn, logout} = useContext(AuthContext)

  const authenticatedRoutes = [
    {link: '/', label: 'Notes'},
    {link: '/profile', label: 'Profile'},
    {link: '/', label: 'Signout', onClick: logout}
  ]

  const publicRoutes = [
    {link: '/', label:'Authenticate'}
  ]

  const protectedNavLinks = authenticatedRoutes.map((e, i) => <Link key={i} to={e.link} onClick={e.onClick}>{e.label}</Link>)
  const publicNavLinks = publicRoutes.map((e, i) => <Link key={i} to={e.link}>{e.label}</Link>)


  return (
    <div className='nav-links' onClick={props?.onClick}>
      {isLoggedIn ? protectedNavLinks : publicNavLinks}
    </div>
  )
}
