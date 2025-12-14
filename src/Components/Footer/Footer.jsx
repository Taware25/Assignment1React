import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return <>
  
  <div className="footer text-white" style={{backgroundColor: '#2C3E50', padding: '5.5rem'}}>
    <div className="container">
      <div className="row gx-5">
        <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <div className='text-center'>
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <div className='text-center'>
              <h3>AROUND THE WEB</h3>
              <div className={style.icons}>
                <i className={`fa-brands fa-facebook mx-1 ${style.icon}`} aria-hidden="true"></i>
                <i className={`fa-brands fa-twitter mx-1 ${style.icon}`} aria-hidden="true"></i>
                <i className={`fa-brands fa-linkedin-in mx-1 ${style.icon}`} aria-hidden="true"></i>
                <i className={`fas fa-globe mx-1 ${style.icon}`} aria-hidden="true"></i>
              </div>
            </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <div className='text-center'>
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="another-footer d-flex justify-content-center align-items-center text-white pt-3" style={{backgroundColor: '#1A252F'}}>
    <p className='mb-4'>Copyright © Your Website 2021</p>
  </div>
  
  </>
}
