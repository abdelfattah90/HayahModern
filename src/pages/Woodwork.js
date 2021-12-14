import NavBar from '../components/NavBar'
import ShowImagesComponent from '../components/ShowImagesComponent'
import ContactIcon from '../components/ContactIcon'
import CoverPages from '../components/CoverPages'
import Footer from '../components/Footer'

import './css_pages/pages.css'
import React, { useEffect } from 'react'
import { useLocation, withRouter } from 'react-router-dom'

import wood_main0 from '../images/woodwork/wood-main0.jpg'
import wood0_1 from '../images/woodwork/wood0-1.jpg'
import wood0_2 from '../images/woodwork/wood0-2.jpg'

import wood_main1 from '../images/woodwork/wood-main1.jpg'
import wood1_1 from '../images/woodwork/wood1-1.jpg'
import wood1_2 from '../images/woodwork/wood1-2.jpg'

import wood_main2 from '../images/woodwork/wood-main2.jpg'
import wood2_1 from '../images/woodwork/wood2-1.jpg'
import wood2_2 from '../images/woodwork/wood2-2.jpg'

function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const Woodwork = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop>
        <CoverPages name='خشبيات' />
        <ContactIcon />

        <div className='container text-center'>
          <div className='row'>
            <ShowImagesComponent
              modal='model1'
              carouselFade='carouselFade1'
              carouselFadeId='#carouselFade1'
              carouselFadeIdAg='#carouselFade1'
              modalId='#model1'
              img={wood_main1}
              img1={wood1_1}
              img2={wood1_2}
              img3={wood1_1}
              img4={wood1_2}
            />

            <ShowImagesComponent
              modal='model0'
              carouselFade='carouselFade0'
              carouselFadeId='#carouselFade0'
              carouselFadeIdAg='#carouselFade0'
              modalId='#model0'
              img={wood_main0}
              img1={wood0_1}
              img2={wood0_2}
              img3={wood0_1}
              img4={wood0_2}
            />

            <ShowImagesComponent
              modal='model2'
              carouselFade='carouselFade2'
              carouselFadeId='#carouselFade2'
              carouselFadeIdAg='#carouselFade2'
              modalId='#model2'
              img={wood_main2}
              img1={wood2_1}
              img2={wood2_2}
              img3={wood2_1}
              img4={wood2_2}
            />
          </div>
        </div>
      </ScrollToTop>

      <div className='m-5 pb-5'></div>
      <div className='m-5 pb-5'></div>

      <Footer />
    </>
  )
}

export default Woodwork
