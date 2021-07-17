import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Header() {
    return (
        
	    <div className="header navbar-light bg-primary ">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary container ">
          <div className="container-fluid col-md">
            <a className="navbar-brand text-light " href="/">DEMO Streaming</a>
          </div>
          <div className=" col-right" class="pull-right" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="#">Log In</a>
                </li>
                <button className=" bg-dark border-0 ">
                  <a className=" trial text-light" href="#">Start your free trial</a>
                </button>
              </ul>
            </div>
        </nav>
      
      </div>
    );
}

export default Header;

