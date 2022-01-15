import * as React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>

  )
}
export default Layout
