import * as React from 'react'
import { Box, Grid, GridItem } from "@chakra-ui/react"

import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Sidebar from '../organisms/Sidebar'

const Layout = ({ children }) => {
  return (
    <Box bg="background">
      <Header />

      <main>
        <Grid
          templateColumns={{ base: "1fr", md: "5fr minmax(180px, 2fr)"}}
          gap={{ base: "0", md: "6" }}
        >
          <GridItem p="8">
            {children}
          </GridItem>
          <GridItem p="2">
            <Sidebar />
          </GridItem>
        </Grid>
      </main>

      <Footer />
    </Box>

  )
}
export default Layout
