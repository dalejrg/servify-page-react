import React from 'react'
import cerrajeria from '../assets/img/cerrajeria-banner.jpg'

export default function About() {
  return (
    <div class="container-fluid py-5">
      <div class="container pt-0 pt-lg-4">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <img class="img-fluid" src={cerrajeria} alt="" />
          </div>
          <div class="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
            <h6 class="text-secondary text-uppercase font-weight-medium mb-3">
              Conozca más sobre nosotros
            </h6>
            <h1 class="mb-4">
              Somos una aplicación web confiable para solicitar u ofrecer
              servicios profesionales, técnicos y educativos
            </h1>
            <h5 class="font-weight-medium font-italic mb-4">
              Contamos con un personal altamente capacitado que le ayudará a
              solucionar los problemas de su hogar, negocio o empresa de manera
              efectiva.
            </h5>
            <p class="mb-2">
              Servify es una aplicación web, con cobertura en la ciudad de
              Bogotá, con posibilidad de expandirse a otras ciudades de
              Colombia, donde se le permite a las personas con conocimientos
              técnicos y/o profesionales ofrecer sus servicios, a aquellas
              personas que lo necesiten en la comodidad de sus hogares, negocios
              o empresas. Dentro de la plataforma, se realiza una rigurosa
              selección de los proveedores de servicios para asegurar la
              excelencia en el servicio ofrecido a los usuarios que los
              soliciten.
            </p>
            <div class="row">
              <div class="col-sm-6 pt-3">
                <div class="d-flex align-items-center">
                  <i class="fa fa-check text-primary mr-2"></i>
                  <p class="text-secondary font-weight-medium m-0">
                    Servicio confiable en la puerta de su hogar
                  </p>
                </div>
              </div>
              <div class="col-sm-6 pt-3">
                <div class="d-flex align-items-center">
                  <i class="fa fa-check text-primary mr-2"></i>
                  <p class="text-secondary font-weight-medium m-0">
                    Fácil conexión entre proveedores de servicios y clientes
                  </p>
                </div>
              </div>
              <div class="col-sm-6 pt-3">
                <div class="d-flex align-items-center">
                  <i class="fa fa-check text-primary mr-2"></i>
                  <p class="text-secondary font-weight-medium m-0">
                    Acceso eficiente a una amplia gama de servicios para el hogar
                  </p>
                </div>
              </div>
              <div class="col-sm-6 pt-3">
                <div class="d-flex align-items-center">
                  <i class="fa fa-check text-primary mr-2"></i>
                  <p class="text-secondary font-weight-medium m-0">
                    Personal capacitado para los servicios del hogar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
