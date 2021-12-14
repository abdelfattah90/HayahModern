import NavBar from '../components/NavBar'
import ShowImagesComponent from '../components/ShowImagesComponent'
import ContactIcon from '../components/ContactIcon'
import CoverPages from '../components/CoverPages'
import Footer from '../components/Footer'

import './css_pages/pages.css'
import React, { useEffect } from 'react'
import { useLocation, withRouter } from 'react-router-dom'

import hour_main1 from '../images/hours/hour-main1.jpg'
import hour1_1 from '../images/hours/hour1-1.jpg'
import hour1_2 from '../images/hours/hour1-2.jpg'

import hour_main2 from '../images/hours/hour-main2.jpg'
import hour2_1 from '../images/hours/hour2-1.jpg'
import hour2_2 from '../images/hours/hour2-2.jpg'

import hour_main3 from '../images/hours/hour-main3.jpg'
import hour3_1 from '../images/hours/hour3-1.jpg'
import hour3_2 from '../images/hours/hour3-2.jpg'

import hour_main4 from '../images/hours/hour-main4.jpg'
import hour4_1 from '../images/hours/hour4-1.jpg'
import hour4_2 from '../images/hours/hour4-2.jpg'

import hour_main5 from '../images/hours/hour-main5.jpg'
import hour5_1 from '../images/hours/hour5-1.jpg'
import hour5_2 from '../images/hours/hour5-2.jpg'

import hour_main6 from '../images/hours/hour-main6.jpg'
import hour6_1 from '../images/hours/hour6-1.jpg'
import hour6_2 from '../images/hours/hour6-2.jpg'

import hour_main7 from '../images/hours/hour-main7.jpg'
import hour7_1 from '../images/hours/hour7-1.jpg'
import hour7_2 from '../images/hours/hour7-2.jpg'

function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const Hours = () => {
  return (
    <>
      <NavBar />

      <ScrollToTop>
        <CoverPages name='ساعات' />
        <ContactIcon />

        <div className='container text-center'>
          <div className='row'>
            <ShowImagesComponent
              modal='model7'
              carouselFade='carouselFade7'
              carouselFadeId='#carouselFade7'
              carouselFadeIdAg='#carouselFade7'
              modalId='#model7'
              img={hour_main7}
              img1={hour7_1}
              img2={hour7_2}
              img3={hour7_1}
              img4={hour7_2}
            />

            <ShowImagesComponent
              modal='model1'
              carouselFade='carouselFade1'
              carouselFadeId='#carouselFade1'
              carouselFadeIdAg='#carouselFade1'
              modalId='#model1'
              img={hour_main1}
              img1={hour1_1}
              img2={hour1_2}
              img3={hour1_1}
              img4={hour1_2}
            />

            <ShowImagesComponent
              modal='model2'
              carouselFade='carouselFade2'
              carouselFadeId='#carouselFade2'
              carouselFadeIdAg='#carouselFade2'
              modalId='#model2'
              img={hour_main2}
              img1={hour2_1}
              img2={hour2_2}
              img3={hour2_1}
              img4={hour2_2}
            />

            <ShowImagesComponent
              modal='model3'
              carouselFade='carouselFade3'
              carouselFadeId='#carouselFade3'
              carouselFadeIdAg='#carouselFade3'
              modalId='#model3'
              img={hour_main3}
              img1={hour3_1}
              img2={hour3_2}
              img3={hour3_1}
              img4={hour3_2}
            />

            <ShowImagesComponent
              modal='model4'
              carouselFade='carouselFade4'
              carouselFadeId='#carouselFade4'
              carouselFadeIdAg='#carouselFade4'
              modalId='#model4'
              img={hour_main4}
              img1={hour4_1}
              img2={hour4_2}
              img3={hour4_1}
              img4={hour4_2}
            />

            <ShowImagesComponent
              modal='model5'
              carouselFade='carouselFade5'
              carouselFadeId='#carouselFade5'
              carouselFadeIdAg='#carouselFade5'
              modalId='#model5'
              img={hour_main5}
              img1={hour5_1}
              img2={hour5_2}
              img3={hour5_1}
              img4={hour5_2}
            />

            <ShowImagesComponent
              modal='model6'
              carouselFade='carouselFade6'
              carouselFadeId='#carouselFade6'
              carouselFadeIdAg='#carouselFade6'
              modalId='#model6'
              img={hour_main6}
              img1={hour6_1}
              img2={hour6_2}
              img3={hour6_1}
              img4={hour6_2}
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

export default Hours
