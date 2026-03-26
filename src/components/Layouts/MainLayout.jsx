import React, { Suspense } from 'react'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Loader } from '../Loader/Loader'

export const MainLayout = () => {
  return (
    <div>
        <Header/>
        <Suspense fallback={<Loader />}></Suspense>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
