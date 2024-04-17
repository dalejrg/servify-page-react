import React from 'react';
import home from '../assets/img/homeMobile.jpg';
import register from '../assets/img/register1.jpg';
import servicios from '../assets/img/Services.jpg';
import proveedor from '../assets/img/proveedor.jpg';


export default function Services() {
  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="container">
        <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
          
        </h6>
        <h1 className="display-4 text-center mb-5">Mock Up</h1>
        <div className="row">
          <div className="col-lg-3 col-md-6 pb-1">
            <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: '700px' }}>
              <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ height: '500px' }}>
                <img src={home} className="w-100 h-100" alt="Juan Danilo Aldana" />
                <i className="fa fa-3x fa-cloud-sun text-secondary"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-1">
            <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: '700px' }}>
              <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ height: '500px' }}>
                <img src={register} className="w-100 h-100" alt="Dayana Rodríguez" />
                <i className="fas fa-3x fa-soap text-secondary"></i>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-1">
            <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: '700px' }}>
              <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ height: '500px' }}>
                <img src={servicios} className="w-100 h-100" alt="Brandon Alvarez Moreno" />
                {/* <i className="fa fa-3x fa-burn text-secondary"></i> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-1">
            <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: '700px' }}>
              <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ height: '500px' }}>
                <img src={proveedor} className="w-100 h-100" alt="Didier Giovanni Perez" />
                <i className="fa fa-3x fa-tshirt text-secondary"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-1">
            
          </div>
        </div>
      </div>
    </div>
  );
}
