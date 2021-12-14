import NavBar from '../components/NavBar'
import CurtainsComponent from '../components/CurtainsComponent'
import ContactIcon from '../components/ContactIcon'
import CoverPages from '../components/CoverPages'
import Footer from '../components/Footer'

import './css_pages/pages.css'
import React, { useEffect } from 'react'
import { useLocation, withRouter } from 'react-router-dom'

import frame1 from '../images/frames/frame1.jpeg'
import frame2 from '../images/frames/frame2.jpeg'
import frame3 from '../images/frames/frame3.jpeg'
import frame4 from '../images/frames/frame4.jpeg'
import frame5 from '../images/frames/frame5.jpeg'
import frame6 from '../images/frames/frame6.jpeg'
import frame7 from '../images/frames/frame7.jpeg'
import frame8 from '../images/frames/frame8.jpeg'
import frame9 from '../images/frames/frame9.jpeg'
import frame10 from '../images/frames/frame10.jpeg'
import frame11 from '../images/frames/frame11.jpeg'
import frame12 from '../images/frames/frame12.jpeg'
import frame13 from '../images/frames/frame13.jpeg'
import frame14 from '../images/frames/frame14.jpeg'
import frame15 from '../images/frames/frame15.jpeg'
import frame16 from '../images/frames/frame16.jpeg'
import frame17 from '../images/frames/frame17.jpeg'
import frame18 from '../images/frames/frame18.jpeg'
import frame19 from '../images/frames/frame19.jpeg'
import frame20 from '../images/frames/frame20.jpeg'
import frame21 from '../images/frames/frame21.jpeg'
import frame22 from '../images/frames/frame22.jpeg'
import frame23 from '../images/frames/frame23.jpeg'
import frame24 from '../images/frames/frame24.jpeg'

function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const Frames = () => {
  return (
    <>
      <NavBar />
      <CoverPages name="براويز" />
      <ContactIcon />
      <ScrollToTop>
        <div className="container text-center">
          <div className="row">
            <CurtainsComponent img={frame1} />
            <CurtainsComponent img={frame2} />
            <CurtainsComponent img={frame3} />
            <CurtainsComponent img={frame4} />
            <CurtainsComponent img={frame5} />
            <CurtainsComponent img={frame6} />
            <CurtainsComponent img={frame7} />
            <CurtainsComponent img={frame8} />
            <CurtainsComponent img={frame9} />
            <CurtainsComponent img={frame10} />
            <CurtainsComponent img={frame11} />
            <CurtainsComponent img={frame12} />
            <CurtainsComponent img={frame13} />
            <CurtainsComponent img={frame14} />
            <CurtainsComponent img={frame15} />
            <CurtainsComponent img={frame16} />
            <CurtainsComponent img={frame17} />
            <CurtainsComponent img={frame18} />
            <CurtainsComponent img={frame19} />
            <CurtainsComponent img={frame20} />
            <CurtainsComponent img={frame21} />
            <CurtainsComponent img={frame22} />
            <CurtainsComponent img={frame23} />
            <CurtainsComponent img={frame24} />
          </div>
        </div>
      </ScrollToTop>

      <div className="m-5 pb-5"></div>
      <div className="m-5 pb-5"></div>

      <Footer />
    </>
  )
}

export default Frames
