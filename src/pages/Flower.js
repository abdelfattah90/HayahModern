import NavBar from '../components/NavBar'
import BokesPage from '../components/BokesPage'
import FlowersPage from '../components/FlowersPage'
import TreePage from '../components/TreePage'

import ContactIcon from '../components/ContactIcon'
import Footer from '../components/Footer'

import './css_pages/pages.css'
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

const Flower = () => {
  return (
    <>
      <NavBar />

      <ScrollToTop>
        <ContactIcon />

        <div className='container'>
          <div className='m-5 pb-5'></div>
          <ul
            className='d-flex justify-content-center nav nav-pills mb-3'
            id='pills-tab'
            role='tablist'
          >
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link'
                id='pills-home-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-home'
                type='button'
                role='tab'
                aria-controls='pills-home'
                aria-selected='true'
              >
                شجر
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link'
                id='pills-profile-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-profile'
                type='button'
                role='tab'
                aria-controls='pills-profile'
                aria-selected='false'
              >
                زهور
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link active'
                id='pills-contact-tab'
                data-bs-toggle='pill'
                data-bs-target='#pills-contact'
                type='button'
                role='tab'
                aria-controls='pills-contact'
                aria-selected='false'
              >
                بوكيهات
              </button>
            </li>
          </ul>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade'
              id='pills-home'
              role='tabpanel'
              aria-labelledby='pills-home-tab'
            >
              <div className='container text-center'>
                <div className='row'>
                  <TreePage />
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-profile'
              role='tabpanel'
              aria-labelledby='pills-profile-tab'
            >
              <div className='container text-center'>
                <div className='row'>
                  <FlowersPage />
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade show active'
              id='pills-contact'
              role='tabpanel'
              aria-labelledby='pills-contact-tab'
            >
              <div className='container text-center'>
                <div className='row'>
                  <BokesPage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollToTop>

      <div className='m-5 pb-5'></div>
      <div className='m-5 pb-5'></div>

      <Footer />
    </>
  )
}

export default Flower
