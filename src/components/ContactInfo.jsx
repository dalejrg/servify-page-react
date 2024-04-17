import React from 'react'

export default function ContactInfo() {
  return (
    <div className="container-fluid contact-info mt-5 mb-4">
      <div className="container" style={{ padding: '0 30px' }}>
        <div className="row">
          <div className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{ height: '100px' }}>
            <div className="d-inline-flex">
              <i className="fa fa-2x fa-map-marker-alt text-white m-0 mr-3"></i>
              <div className="d-flex flex-column">
                <h5 className="text-white font-weight-medium">Nuestra locación</h5>
                <p className="m-0 text-white">Tenemos cobertura en todo Bogotá</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center bg-primary mb-4 mb-lg-0" style={{ height: '100px' }}>
            <div className="d-inline-flex text-left">
              <i className="fa fa-2x fa-envelope text-white m-0 mr-3"></i>
              <div className="d-flex flex-column">
                <h5 className="text-white font-weight-medium">Nuestro email</h5>
                <p className="m-0 text-white">servify.appco@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{ height: '100px' }}>
            <div className="d-inline-flex text-left">
              <i className="fa fa-2x fa-phone-alt text-white m-0 mr-3"></i>
              <div className="d-flex flex-column">
                <h5 className="text-white font-weight-medium">Llámanos</h5>
                <p className="m-0 text-white">323 3037605</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
