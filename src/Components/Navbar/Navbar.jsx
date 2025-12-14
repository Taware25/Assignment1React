import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

export default function Navbar() {
  return <>
    <nav className={`navbar navbar-expand-lg p-4 ${style.nav}`}>
          <div className="container">
            <NavLink className="navbar-brand text-white fs-2 fw-bolder" to={'/'}>START FRAMEWORK</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-3">
                  <NavLink className={({isActive}) => `${isActive ? style.activeLink : ''} nav-link text-white mt-1 px-2 fw-bolder`} to={'/about'}>ABOUT</NavLink>
                </li>
                <li className="nav-item me-3">
                  <NavLink className={({isActive}) => `${isActive ? style.activeLink : ''} nav-link text-white mt-1 px-2 fw-bolder`} to={'/portfolio'}>PORTFOLIO</NavLink>
                </li>
                <li className="nav-item me-3">
                  <NavLink className={({isActive}) => `${isActive ? style.activeLink : ''} nav-link text-white mt-1 px-2 fw-bolder`} to={'/contact'}>CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </>
}
