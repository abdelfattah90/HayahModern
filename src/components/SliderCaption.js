import './css_components/slidercaption.css'
import img1 from '../images/home/sli1.jpg'
import img2 from '../images/home/sli2.jpg'
import img3 from '../images/home/sli3.jpg'

const SliderCaption = () => {
  return (
    <>
      <div className='container slider-caption'>
        <div
          id='carouselExampleCaptions'
          className='carousel slide vvd'
          data-bs-ride='carousel'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={0}
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            />
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={1}
              aria-label='Slide 2'
            />
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={2}
              aria-label='Slide 3'
            />
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={img1} className='d-block w-100 img-slider' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src={img2} className='d-block w-100 img-slider' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src={img3} className='d-block w-100 img-slider' alt='...' />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <div className='m-5 pb-5'></div>
    </>
  )
}

export default SliderCaption
