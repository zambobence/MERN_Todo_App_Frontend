import React, { useEffect } from 'react'
import Container from '../shared/components/Container'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import { useState } from 'react'
import MainMenu from './MainMenu'
import BackDrop from '../shared/components/BackDrop'

import MenuToggler from './MenuToggler'
import './Header.css'
import Logo from './Logo'

export default function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [screenWidth, setSecreenWidth] = useState(window.innerWidth)

  const menuOpenHandler = () => {
    setMenuOpen(prevState => !prevState)
  }

  const handleResize = () => {
    setSecreenWidth(window.innerWidth)
    if (window.innerWidth > 780){
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  },[])

  return (
    <header>
      <Container className={'flex'}>
          <MenuToggler onClick={menuOpenHandler}/>
          <Logo />
          <SideDrawer menuOpen={menuOpen}>
            <NavLinks onClick={menuOpenHandler}/>
          </SideDrawer>
          <MainMenu className="">
            <NavLinks />
          </MainMenu>
      </Container>
      <BackDrop show={menuOpen} onClick={menuOpenHandler}/>
    </header>
  )
}
