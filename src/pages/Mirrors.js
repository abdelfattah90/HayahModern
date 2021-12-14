import NavBar from '../components/NavBar'
import ShowImagesComponent from '../components/ShowImagesComponent'
import ContactIcon from '../components/ContactIcon'
import CoverPages from '../components/CoverPages'
import Footer from '../components/Footer'

import './css_pages/pages.css'
import React, { useEffect } from 'react'
import { useLocation, withRouter } from 'react-router-dom'

import mirror_main1 from '../images/mirrors/mirror-main1.jpg'
import mirror1_1 from '../images/mirrors/mirror1-1.jpg'
import mirror1_2 from '../images/mirrors/mirror1-2.jpg'

import mirror_main2 from '../images/mirrors/mirror-main2.jpg'
import mirror2_1 from '../images/mirrors/mirror2-1.jpg'
import mirror2_2 from '../images/mirrors/mirror2-2.jpg'

import mirror_main3 from '../images/mirrors/mirror-main3.jpg'
import mirror3_1 from '../images/mirrors/mirror3-1.jpg'
import mirror3_2 from '../images/mirrors/mirror3-2.jpg'

import mirror_main4 from '../images/mirrors/mirror-main4.jpg'
import mirror4_1 from '../images/mirrors/mirror4-1.jpg'
import mirror4_2 from '../images/mirrors/mirror4-2.jpg'

import mirror_main5 from '../images/mirrors/mirror-main5.jpg'
import mirror5_1 from '../images/mirrors/mirror5-1.jpg'
import mirror5_2 from '../images/mirrors/mirror5-2.jpg'

function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const Mirrors = () => {
  return (
    <>
      <NavBar />

      <ScrollToTop>
        <CoverPages name='مرايات' />
        <ContactIcon />

        <div className='container text-center'>
          <div className='row'>
            <ShowImagesComponent
              modal='model1'
              carouselFade='carouselFade1'
              carouselFadeId='#carouselFade1'
              carouselFadeIdAg='#carouselFade1'
              modalId='#model1'
              img={mirror_main1}
              img1={mirror1_1}
              img2={mirror1_2}
              img3={mirror1_1}
              img4={mirror1_2}
            />

            <ShowImagesComponent
              modal='model2'
              carouselFade='carouselFade2'
              carouselFadeId='#carouselFade2'
              carouselFadeIdAg='#carouselFade2'
              modalId='#model2'
              img={mirror_main2}
              img1={mirror2_1}
              img2={mirror2_2}
              img3={mirror2_1}
              img4={mirror2_2}
            />

            <ShowImagesComponent
              modal='model3'
              carouselFade='carouselFade3'
              carouselFadeId='#carouselFade3'
              carouselFadeIdAg='#carouselFade3'
              modalId='#model3'
              img={mirror_main3}
              img1={mirror3_1}
              img2={mirror3_2}
              img3={mirror3_1}
              img4={mirror3_2}
            />

            <ShowImagesComponent
              modal='model4'
              carouselFade='carouselFade4'
              carouselFadeId='#carouselFade4'
              carouselFadeIdAg='#carouselFade4'
              modalId='#model4'
              img={mirror_main4}
              img1={mirror4_1}
              img2={mirror4_2}
              img3={mirror4_1}
              img4={mirror4_2}
            />

            <ShowImagesComponent
              modal='model5'
              carouselFade='carouselFade5'
              carouselFadeId='#carouselFade5'
              carouselFadeIdAg='#carouselFade5'
              modalId='#model5'
              img={mirror_main5}
              img1={mirror5_1}
              img2={mirror5_2}
              img3={mirror5_1}
              img4={mirror5_2}
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

export default Mirrors
