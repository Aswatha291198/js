import React from 'react'
import Header from './Header'
import Banner from './Banner'

const Layout = ({children}) => {
  return (
<>
<Header/>
<main>
  <Banner/>
{children}
</main>
</>
  )
}

export default Layout