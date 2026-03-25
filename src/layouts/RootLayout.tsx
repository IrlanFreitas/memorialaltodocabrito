import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MenuFlutuante from '../components/MenuFlutuante'

export default function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <MenuFlutuante />
      <Footer />
    </>
  )
}
