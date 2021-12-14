import './css_components/footer.css'
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'

const Footer = () => {
  AOS.init()
  return (
    <>
      <div className='contact'>
        <h1 data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='100'>
          أبَق على تواصل معنا
        </h1>
        <div className='m-3 pb-3'></div>
        <div className='mx-auto sm-icons text-center'>
          <a href='https://www.facebook.com/Hayah.Modern' target='_blanck'>
            <i
              data-aos='zoom-in-up'
              data-aos-duration='1000'
              data-aos-delay='100'
              className='fab fa-facebook'
            ></i>
          </a>

          <a href='https://www.messenger.com/t/Hayah.Modern' target='_blanck'>
            <i
              data-aos='zoom-in-up'
              data-aos-duration='1500'
              data-aos-delay='100'
              className='fab fa-facebook-messenger messenger'
            ></i>
          </a>

          <a href='https://wa.me/+201004017301' target='_blanck'>
            <i
              data-aos='zoom-in-up'
              data-aos-duration='2000'
              data-aos-delay='100'
              className='fab fa-whatsapp-square whatsapp'
            ></i>
          </a>

          <a href='tel:+201004017301' target='_blanck'>
            <i
              data-aos='zoom-in-up'
              data-aos-duration='2500'
              data-aos-delay='100'
              className='fas fa-phone-square-alt call'
            ></i>
          </a>
        </div>

        <div className='m-4 pb-4'></div>

        <div className='container'>
          <h4 className='float-end'>
            العنوان : دمنهور - شارع السجن بجوار نادى الشرطة
          </h4>
        </div>
      </div>
    </>
  )
}

export default Footer
