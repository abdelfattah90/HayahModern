import NavBar from './components/NavBar'
import Cover from './components/Cover'
import LatestProducts from './components/LatestProducts'
import CoverMiddle from './components/CoverMiddle'
import SliderCaption from './components/SliderCaption'
import Footer from './components/Footer'
import React, { useEffect } from 'react'
import { useLocation, withRouter } from 'react-router-dom'

function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const Home = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop>
        <Cover />
        <LatestProducts />
        <CoverMiddle />

        <SliderCaption />
        <Footer />
      </ScrollToTop>
    </>
  )
}

export default Home
