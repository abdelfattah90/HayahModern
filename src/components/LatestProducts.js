import './css_components/latestproducts.css'
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'
import img1 from '../images/home/1.jpg'
import img2 from '../images/home/2.jpg'
import img3 from '../images/home/3.jpg'
import img4 from '../images/home/4.jpg'
import img5 from '../images/home/5.jpg'
import img6 from '../images/home/6.jpg'

const LatestProducts = () => {
  AOS.init()
  return (
    <>
      <div className='container'>
        <div className='m-5 pb-5'></div>

        <h2
          data-aos='zoom-in'
          data-aos-duration='1000'
          data-aos-delay=''
          className='text-center'
        >
          أفضل المعروضات
        </h2>

        <div className='m-2 pb-2'></div>

        <div className='m-3 pb-3'></div>

        <div className='row'>
          <div className='col-lg-4'>
            <div className='title-link'>
              <img className='image-cover img-thumbnail' alt='...' src={img1} />
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='title-link'>
              <img className='image-cover img-thumbnail' alt='...' src={img2} />
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='title-link'>
              <img className='image-cover img-thumbnail' alt='...' src={img3} />
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='title-link'>
              <img className='image-cover img-thumbnail' alt='...' src={img4} />
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='title-link'>
              <img className='image-cover img-thumbnail' alt='...' src={img5} />
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='title-link'>
              <img className='image-cover img-thumbnail' alt='...' src={img6} />
            </div>
          </div>
        </div>
      </div>
      <div className='m-5 pb-5'></div>
      <div className='m-5 pb-5'></div>
    </>
  )
}

export default LatestProducts
