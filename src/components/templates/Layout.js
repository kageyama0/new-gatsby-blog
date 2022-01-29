import * as React from 'react'
import { Box, Grid, GridItem } from "@chakra-ui/react"

import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Sidebar from '../organisms/Sidebar'

const Layout = ({ children }) => {
  return (
    <Box bg="background">
      <Header />

      <main margin="1rem auto">
        <Grid
          templateColumns={{ base: "1fr", lg: "5fr minmax(180px, 2fr)"}}
          gap={{ base: "0", md: "6" }}
        >
          <GridItem
            padding={{ base: "1rem 0.4rem", md: "2rem 0.5rem" }}
            margin="auto"
            maxWidth="60rem"
          >
            {children}
          </GridItem>
          <GridItem
            padding={{ base: "1rem 0.4rem", md: "2rem 0.5rem" }}
          >
            <Sidebar />
          </GridItem>
        </Grid>
      </main>

      <Footer />
    </Box>

  )
}
export default Layout
