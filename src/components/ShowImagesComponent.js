const ShowImagesComponent = (props) => {
  return (
    <>
      {/* Start Main Item */}

      <div className='col-lg-6 col-sm-12 main-item'>
        {/* Start Modal */}
        <div
          className='modal fade'
          id={props.modal}
          aria-hidden='true'
          tabIndex={-1}
        >
          <div className='modal-dialog modal-dialog-centered'>
            {/* Start Modal Content*/}
            <div className='modal-content'>
              {/* Start Button Close*/}
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
              {/* End Button Close*/}

              {/* Start Show Carousel*/}
              <div
                id={props.carouselFade}
                className='carousel slide '
                data-bs-ride='carousel'
              >
                {/* className= carousel slide carousel-fade  */}

                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <img
                      src={props.img1}
                      className='d-block w-100 carousel-img'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src={props.img2}
                      className='d-block w-100 carousel-img'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src={props.img3}
                      className='d-block w-100 carousel-img'
                      alt='...'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      src={props.img4}
                      className='d-block w-100 carousel-img'
                      alt='...'
                    />
                  </div>
                </div>
                {/* Start Show Next , Previous */}
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target={props.carouselFadeId}
                  data-bs-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  />
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target={props.carouselFadeIdAg}
                  data-bs-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  />
                  <span className='visually-hidden'>Next</span>
                </button>
                {/* Start Show Next , Previous */}
              </div>
              {/* End Show Carousel*/}
            </div>
            {/* End Modal Content*/}
          </div>
        </div>
        {/* End Modal */}

        {/* Start Items Section */}
        <div className='container-fluid'>
          <div className='show-items'>
            {/* Start modal Item Image*/}

            <div
              className='show-carousel'
              data-bs-target={props.modalId}
              data-bs-toggle='modal'
              data-bs-dismiss='modal'
            >
              <img
                src={props.img}
                className='image-item rounded mx-auto d-block'
                alt='...'
              />
            </div>

            {/* End modal Item Image*/}
          </div>
        </div>
        {/* End Items Section */}
      </div>
      {/* Start Main Item */}
    </>
  )
}

export default ShowImagesComponent
