import React, { Suspense, useState } from 'react'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Loader } from '../Loader/Loader'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import { StlMainLayoutContainer } from './MainLayout.styled'


export const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <StlMainLayoutContainer>
        <Suspense fallback={<Loader />}></Suspense>
        <Header onMenuClick={toggleMenu}/>
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        <main>
            <Outlet/>
        </main>
    </StlMainLayoutContainer>
  )
}
