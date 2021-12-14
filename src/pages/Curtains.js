import NavBar from '../components/NavBar'
import CurtainsComponent from '../components/CurtainsComponent'
import ContactIcon from '../components/ContactIcon'
import CoverPages from '../components/CoverPages'
import Footer from '../components/Footer'

import './css_pages/pages.css'
import React, { useEffect } from 'react'
import { useLocation, withRouter } from 'react-router-dom'

import cur1 from '../images/curtains/cur1.jpeg'
import cur2 from '../images/curtains/cur2.jpeg'
import cur3 from '../images/curtains/cur3.jpeg'
import cur4 from '../images/curtains/cur4.jpeg'
import cur5 from '../images/curtains/cur5.jpeg'
import cur7 from '../images/curtains/cur7.jpeg'
import cur8 from '../images/curtains/cur8.jpeg'
import cur9 from '../images/curtains/cur9.jpeg'
import cur10 from '../images/curtains/cur10.jpeg'
import cur11 from '../images/curtains/cur11.jpeg'
import cur12 from '../images/curtains/cur12.jpeg'
import cur13 from '../images/curtains/cur13.jpeg'
import cur14 from '../images/curtains/cur14.jpeg'

function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const Curtains = () => {
  return (
    <>
      <NavBar />
      <CoverPages name="ستائر حمام" />
      <ContactIcon />
      <ScrollToTop>
        <div className="container text-center">
          <div className="row">
            <CurtainsComponent img={cur1} />
            <CurtainsComponent img={cur2} />
            <CurtainsComponent img={cur3} />
            <CurtainsComponent img={cur4} />
            <CurtainsComponent img={cur5} />
            <CurtainsComponent img={cur7} />
            <CurtainsComponent img={cur8} />
            <CurtainsComponent img={cur9} />
            <CurtainsComponent img={cur10} />
            <CurtainsComponent img={cur11} />
            <CurtainsComponent img={cur12} />
            <CurtainsComponent img={cur13} />
            <CurtainsComponent img={cur14} />
          </div>
        </div>
      </ScrollToTop>

      <div className="m-5 pb-5"></div>
      <div className="m-5 pb-5"></div>

      <Footer />
    </>
  )
}

export default Curtains
