import React from 'react';

export default function Navbar() {
  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 pl-3 pl-lg-5">
          <a href="/" className="navbar-brand">
            <h1 className="m-0 text-secondary">
              <span className="text-primary">SERVIFY</span>
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
            <div className="navbar-nav ml-auto py-0">
              <a href="http://servifyapp.com.co:3001/" target="_blank" className="nav-item nav-link">Visita nuestra web</a>
              <a href="https://github.com/dayarg/servify-app-project" target="_blank" className="nav-item nav-link">GitHub</a>
              <a href="https://academiausbbogedu.sharepoint.com/sites/ProyectoPOSPET" target="_blank" className="nav-item nav-link">Portafolio</a>
              <div className="nav-item dropdown">
                <div className="dropdown-menu border-0 rounded-0 m-0">
                  <a href="https://github.com/dayarg/servify-app-project" target="_blank" className="dropdown-item">GitHub</a>
                  <a href="https://academiausbbogedu.sharepoint.com/sites/ProyectoPOSPET" target="_blank" className="dropdown-item">Portafolio</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
