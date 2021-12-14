import NavBar from '../components/NavBar'
import ShowImagesComponent from '../components/ShowImagesComponent'
import ContactIcon from '../components/ContactIcon'
import CoverPages from '../components/CoverPages'
import Footer from '../components/Footer'

import './css_pages/pages.css'
import React, { useEffect } from 'react'
import { useLocation, withRouter } from 'react-router-dom'

import bluemain from '../images/living/blue-main.jpg'
import blue1 from '../images/living/blue1.jpg'
import blue2 from '../images/living/blue2.jpg'
import blue3 from '../images/living/blue3.jpg'

import goldmain from '../images/living/gold-main.jpg'
import gold1 from '../images/living/gold1.jpg'
import gold2 from '../images/living/gold2.jpg'
import gold3 from '../images/living/gold3.jpg'

import graymain from '../images/living/gray-main.jpg'
import gray1 from '../images/living/gray1.jpg'
import gray2 from '../images/living/gray2.jpg'

import gremain from '../images/living/gre-main.jpg'
import gre1 from '../images/living/gre1.jpg'
import gre2 from '../images/living/gre2.jpg'
import gre3 from '../images/living/gre3.jpg'

import wbmain from '../images/living/wb-main.jpg'
import wb1 from '../images/living/wb1.jpg'
import wb2 from '../images/living/wb2.jpg'
import wb3 from '../images/living/wb3.jpg'


import livmain1 from '../images/living/liv-main1.jpg'
import liv1_1 from '../images/living/liv1-1.jpg'
import liv1_2 from '../images/living/liv1-2.jpg'
import liv1_3 from '../images/living/liv1-3.jpg'

import livmain2 from '../images/living/liv-main2.jpg'
import liv2_1 from '../images/living/liv2-1.jpg'
import liv2_2 from '../images/living/liv2-2.jpg'
import liv2_3 from '../images/living/liv2-3.jpg'

import livmain3 from '../images/living/liv-main3.jpg'
import liv3_1 from '../images/living/liv3-1.jpg'
import liv3_2 from '../images/living/liv3-2.jpg'
import liv3_3 from '../images/living/liv3-3.jpg'
import liv3_4 from '../images/living/liv3-4.jpg'

import livmain4 from '../images/living/liv-main4.jpg'
import liv4_1 from '../images/living/liv4-1.jpg'
import liv4_2 from '../images/living/liv4-2.jpg'
import liv4_3 from '../images/living/liv4-3.jpg'
import liv4_4 from '../images/living/liv4-4.jpg'

import livmain5 from '../images/living/liv-main5.jpg'
import liv5_1 from '../images/living/liv5-1.jpg'
import liv5_2 from '../images/living/liv5-2.jpg'


function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const LivingRoom = () => {
  return (
    <>
      <NavBar />

      <ScrollToTop>
        <CoverPages name='ليفينج روم' />
        <ContactIcon />
        <div className='container text-center'>
          <div className='row'>


          <ShowImagesComponent
              modal='modelLiv1'
              carouselFade='carouselFadeLiv1'
              carouselFadeId='#carouselFadeLiv1'
              carouselFadeIdAg='#carouselFadeLiv1'
              modalId='#modelLiv1'
              img={livmain1}
              img1={liv1_1}
              img2={liv1_2}
              img3={liv1_3}
              img4={liv1_2}
            />
            <div className='d-sm-none line-items'></div>

            <ShowImagesComponent
              modal='modelLiv2'
              carouselFade='carouselFadeLiv2'
              carouselFadeId='#carouselFadeLiv2'
              carouselFadeIdAg='#carouselFadeLiv2'
              modalId='#modelLiv2'
              img={livmain2}
              img1={liv2_1}
              img2={liv2_2}
              img3={liv2_3}
              img4={liv2_2}
            />
            <div className='d-sm-none line-items'></div>

            <ShowImagesComponent
              modal='modelLiv3'
              carouselFade='carouselFadeLiv3'
              carouselFadeId='#carouselFadeLiv3'
              carouselFadeIdAg='#carouselFadeLiv3'
              modalId='#modelLiv3'
              img={livmain3}
              img1={liv3_1}
              img2={liv3_2}
              img3={liv3_3}
              img4={liv3_4}
            />
            <div className='d-sm-none line-items'></div>

            <ShowImagesComponent
              modal='modelLiv4'
              carouselFade='carouselFadeLiv4'
              carouselFadeId='#carouselFadeLiv4'
              carouselFadeIdAg='#carouselFadeLiv4'
              modalId='#modelLiv4'
              img={livmain4}
              img1={liv4_1}
              img2={liv4_2}
              img3={liv4_3}
              img4={liv4_4}
            />
            <div className='d-sm-none line-items'></div>

            <ShowImagesComponent
              modal='modelLiv5'
              carouselFade='carouselFadeLiv5'
              carouselFadeId='#carouselFadeLiv5'
              carouselFadeIdAg='#carouselFadeLiv5'
              modalId='#modelLiv5'
              img={livmain5}
              img1={liv5_1}
              img2={liv5_2}
              img3={liv5_1}
              img4={liv5_2}
            />
            <div className='d-sm-none line-items'></div>



            <ShowImagesComponent
              modal='model1'
              carouselFade='carouselFade1'
              carouselFadeId='#carouselFade1'
              carouselFadeIdAg='#carouselFade1'
              modalId='#model1'
              img={bluemain}
              img1={blue1}
              img2={blue2}
              img3={blue3}
              img4={blue2}
            />
            <div className='d-sm-none line-items'></div>
            <ShowImagesComponent
              modal='model2'
              carouselFade='carouselFade2'
              carouselFadeId='#carouselFade2'
              carouselFadeIdAg='#carouselFade2'
              modalId='#model2'
              img={goldmain}
              img1={gold1}
              img2={gold2}
              img3={gold3}
              img4={gold2}
            />
            <div className='d-sm-none line-items'></div>
            <ShowImagesComponent
              modal='model3'
              carouselFade='carouselFade3'
              carouselFadeId='#carouselFade3'
              carouselFadeIdAg='#carouselFade3'
              modalId='#model3'
              img={graymain}
              img1={gray1}
              img2={gray2}
              img3={gray1}
              img4={gray2}
            />
            <div className='d-sm-none line-items'></div>
            <ShowImagesComponent
              modal='model4'
              carouselFade='carouselFade4'
              carouselFadeId='#carouselFade4'
              carouselFadeIdAg='#carouselFade4'
              modalId='#model4'
              img={gremain}
              img1={gre1}
              img2={gre2}
              img3={gre3}
              img4={gre2}
            />
            <div className='d-sm-none line-items'></div>
            <ShowImagesComponent
              modal='model5'
              carouselFade='carouselFade5'
              carouselFadeId='#carouselFade5'
              carouselFadeIdAg='#carouselFade5'
              modalId='#model5'
              img={wbmain}
              img1={wb1}
              img2={wb2}
              img3={wb3}
              img4={wb2}
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

export default LivingRoom
