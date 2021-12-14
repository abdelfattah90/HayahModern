import NavBar from '../components/NavBar'
import ShowImagesComponent from '../components/ShowImagesComponent'
import ContactIcon from '../components/ContactIcon'
import CoverPages from '../components/CoverPages'
import Footer from '../components/Footer'

import './css_pages/pages.css'
import React, { useEffect } from 'react'
import { useLocation, withRouter } from 'react-router-dom'

import ant_main1 from '../images/antiques/ant-main1.jpg'
import ant1_1 from '../images/antiques/ant1-1.jpg'
import ant1_2 from '../images/antiques/ant1-2.jpg'
import ant1_3 from '../images/antiques/ant1-3.jpg'
import ant1_4 from '../images/antiques/ant1-4.jpg'

import ant_main2 from '../images/antiques/ant-main2.jpg'
import ant2_1 from '../images/antiques/ant2-1.jpg'
import ant2_2 from '../images/antiques/ant2-2.jpg'
import ant2_3 from '../images/antiques/ant2-3.jpg'
import ant2_4 from '../images/antiques/ant2-4.jpg'

import ant_main3 from '../images/antiques/ant-main3.jpg'
import ant3_1 from '../images/antiques/ant3-1.jpg'
import ant3_2 from '../images/antiques/ant3-2.jpg'
import ant3_3 from '../images/antiques/ant3-3.jpg'
import ant3_4 from '../images/antiques/ant3-4.jpg'

import ant_main4 from '../images/antiques/ant-main4.jpg'
import ant4_1 from '../images/antiques/ant4-1.jpg'
import ant4_2 from '../images/antiques/ant4-2.jpg'
import ant4_3 from '../images/antiques/ant4-3.jpg'
import ant4_4 from '../images/antiques/ant4-4.jpg'

import ant_main5 from '../images/antiques/ant-main5.jpg'
import ant5_1 from '../images/antiques/ant5-1.jpg'
import ant5_2 from '../images/antiques/ant5-2.jpg'
import ant5_3 from '../images/antiques/ant5-3.jpg'
import ant5_4 from '../images/antiques/ant5-4.jpg'

import ant_main6 from '../images/antiques/ant-main6.jpg'
import ant6_1 from '../images/antiques/ant6-1.jpg'
import ant6_2 from '../images/antiques/ant6-2.jpg'
import ant6_3 from '../images/antiques/ant6-3.jpg'
import ant6_4 from '../images/antiques/ant6-4.jpg'

import ant_main7 from '../images/antiques/ant-main7.jpg'
import ant7_1 from '../images/antiques/ant7-1.jpg'
import ant7_2 from '../images/antiques/ant7-2.jpg'
import ant7_3 from '../images/antiques/ant7-3.jpg'
import ant7_4 from '../images/antiques/ant7-4.jpg'

import ant_main8 from '../images/antiques/ant-main8.jpg'
import ant8_1 from '../images/antiques/ant8-1.jpg'
import ant8_2 from '../images/antiques/ant8-2.jpg'
import ant8_3 from '../images/antiques/ant8-3.jpg'
import ant8_4 from '../images/antiques/ant8-4.jpg'

import ant_main9 from '../images/antiques/ant-main9.jpg'
import ant9_1 from '../images/antiques/ant9-1.jpg'
import ant9_2 from '../images/antiques/ant9-2.jpg'
import ant9_3 from '../images/antiques/ant9-3.jpg'
import ant9_4 from '../images/antiques/ant9-4.jpg'

function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const Antiques = () => {
  return (
    <>
      <NavBar />

      <ScrollToTop>
        <CoverPages name='انتيكات' />
        <ContactIcon />

        <div className='container text-center'>
          <div className='row'>
            <ShowImagesComponent
              modal='model8'
              carouselFade='carouselFade8'
              carouselFadeId='#carouselFade8'
              carouselFadeIdAg='#carouselFade8'
              modalId='#model8'
              img={ant_main8}
              img1={ant8_1}
              img2={ant8_2}
              img3={ant8_3}
              img4={ant8_4}
            />

            <ShowImagesComponent
              modal='model9'
              carouselFade='carouselFade9'
              carouselFadeId='#carouselFade9'
              carouselFadeIdAg='#carouselFade9'
              modalId='#model9'
              img={ant_main9}
              img1={ant9_1}
              img2={ant9_2}
              img3={ant9_3}
              img4={ant9_4}
            />

            <ShowImagesComponent
              modal='model1'
              carouselFade='carouselFade1'
              carouselFadeId='#carouselFade1'
              carouselFadeIdAg='#carouselFade1'
              modalId='#model1'
              img={ant_main1}
              img1={ant1_1}
              img2={ant1_2}
              img3={ant1_3}
              img4={ant1_4}
            />

            <ShowImagesComponent
              modal='model6'
              carouselFade='carouselFade6'
              carouselFadeId='#carouselFade6'
              carouselFadeIdAg='#carouselFade6'
              modalId='#model6'
              img={ant_main6}
              img1={ant6_1}
              img2={ant6_2}
              img3={ant6_3}
              img4={ant6_4}
            />

            <ShowImagesComponent
              modal='model2'
              carouselFade='carouselFade2'
              carouselFadeId='#carouselFade2'
              carouselFadeIdAg='#carouselFade2'
              modalId='#model2'
              img={ant_main2}
              img1={ant2_1}
              img2={ant2_2}
              img3={ant2_3}
              img4={ant2_4}
            />

            <ShowImagesComponent
              modal='model5'
              carouselFade='carouselFade5'
              carouselFadeId='#carouselFade5'
              carouselFadeIdAg='#carouselFade5'
              modalId='#model5'
              img={ant_main5}
              img1={ant5_1}
              img2={ant5_2}
              img3={ant5_3}
              img4={ant5_4}
            />

            <ShowImagesComponent
              modal='model3'
              carouselFade='carouselFade3'
              carouselFadeId='#carouselFade3'
              carouselFadeIdAg='#carouselFade3'
              modalId='#model3'
              img={ant_main3}
              img1={ant3_1}
              img2={ant3_2}
              img3={ant3_3}
              img4={ant3_4}
            />

            <ShowImagesComponent
              modal='model4'
              carouselFade='carouselFade4'
              carouselFadeId='#carouselFade4'
              carouselFadeIdAg='#carouselFade4'
              modalId='#model4'
              img={ant_main4}
              img1={ant4_1}
              img2={ant4_2}
              img3={ant4_3}
              img4={ant4_4}
            />

            <ShowImagesComponent
              modal='model7'
              carouselFade='carouselFade7'
              carouselFadeId='#carouselFade7'
              carouselFadeIdAg='#carouselFade7'
              modalId='#model7'
              img={ant_main7}
              img1={ant7_1}
              img2={ant7_2}
              img3={ant7_3}
              img4={ant7_4}
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

export default Antiques
