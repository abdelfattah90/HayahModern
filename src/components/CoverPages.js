import '../pages/css_pages/pages.css'

const CoverPagesComponent = (props) => {
  return (
    <>
      <div className='cover-pg'>
        <div className='contants-pg'>
          <div className='m-4 pb-4'></div>
          <p className='d-flex justify-content-around slogn-pg'>{props.name}</p>
        </div>
        <div className='m-5 pb-5'></div>
      </div>
    </>
  )
}

export default CoverPagesComponent
