import React from 'react';
import '../styles/index.css';

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-primary text-white mt-5 pt-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="">
              <h1 className="text-secondary mb-3">
                <span className="text-white">SERVIFY</span>
              </h1>
            </a>
            <p>
              Un servicio profesional y confiable a su alcance y en su hogar
            </p>

          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">Proyecto Integrador</h4>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>Universidad de San Buenaventura, Bogotá
            </p>
            <p><i className="fa fa-address-card mr-2"></i>Tecnología en desarrollo de software</p>
            <p><i className="fa fa-calendar mr-2"></i>2024</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">Acceso rápido</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="http://servifyapp.com.co:3001/" target="_blank">
                <i className="fa fa-angle-right mr-2"></i>Visita nuestra web
              </a>
              <a className="text-white mb-2" href="https://github.com/dayarg/servify-app-project" target="_blank">
                <i className="fa fa-angle-right mr-2"></i>GitHub
              </a>
              <a className="text-white mb-2" href="https://academiausbbogedu.sharepoint.com/sites/ProyectoPOSPET" target="_blank">
                <i className="fa fa-angle-right mr-2"></i>Portafolio
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white py-4 px-sm-3 px-md-5">
        <p className="m-0 text-center text-white">
          &copy;
          <a className="text-white font-weight-medium" href="#">Servify</a>.
          All Rights Reserved.
        </p>
      </div>
    </>
  );
}
