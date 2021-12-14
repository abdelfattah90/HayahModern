import './css_components/covermiddle.css'
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'

const CoverMiddle = () => {
  AOS.init()
  return (
    <>
      <div className='m-5 pb-5'></div>
      <div className='cover-middle'>
        <div className='contants-middle'>
          <div className='m-4 pb-4'></div>
          <h1
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-delay='100'
            className='d-flex justify-content-around name-middle'
          >
            مع حياه مودرن
          </h1>
          <div className='m-2 pb-2'></div>
          <h3
            data-aos='zoom-in-up'
            data-aos-duration='1000'
            data-aos-delay='100'
            className='d-flex justify-content-around name-middle'
          >
            عيش الرفاهية وتمتع بالجمال
          </h3>
        </div>
      </div>
      <div className='m-5 pb-5'></div>
    </>
  )
}

export default CoverMiddle
