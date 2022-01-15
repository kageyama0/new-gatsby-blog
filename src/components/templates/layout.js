import * as React from 'react'
import Header from '../organisms/header'
import Footer from '../organisms/footer'

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
