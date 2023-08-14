import { Link } from 'react-router-dom';
import React from 'react';

function NavBar() {

  return (

    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-4 me-5 fs-2">V News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-1 me-3 my-2 my-lg-0 navbar-nav-scroll fs-4 " style={{ bsscrollheight: "100px" }}>
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item dropdown mx-3">
                <Link to="/Categories" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu mx-3">
                  <li><Link to="/Sports" className="dropdown-item">Sports</Link></li>
                  <li><Link to="/Entertainment" className="dropdown-item">Entertainment</Link></li>
                  {/* <li><hr className="dropdown-divider"/></li> */}
                  <li><Link to="/Business" className="dropdown-item">Business</Link></li>
                  <li><Link to="/Technology" className="dropdown-item">Technology</Link></li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}


export default NavBar