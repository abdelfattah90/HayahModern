const CurtainsComponent = (props) => {
  return (
    <>
      <div className="col-lg-6 col-sm-12 main-item">
        <div className="container-fluid">
          <div className="show-items">
            {/* Start modal Item Image*/}

            <img
              src={props.img}
              className="image-item rounded mx-auto d-block"
              alt="..."
            />
          </div>

          {/* End modal Item Image*/}
        </div>
      </div>
    </>
  )
}

export default CurtainsComponent
