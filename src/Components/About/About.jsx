import React from 'react'
import style from './About.module.css'

export default function About() {
  return <>
    <div className={`text-white d-flex justify-content-center align-items-center flex-column ${style.about}`}>
      <h2 className='fw-bolder fs-1 mb-3 mt-5'>ABOUT COMPONENT</h2>
      <div className='d-flex align-items-center justify-content-center mb-3'>
              <div className={`me-3 ${style.line}`}></div>
              <i className='fas fa-star'></i>
              <div className={`ms-3 ${style.line}`}></div>
      </div>
      <div className="container">
        <div className="row px-5">
          <div className="col-md-6 ps-md-5">
            Freelancer is a free bootstrap theme created by Route. The download includes <br /> the complete source files including HTML, CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.
          </div>
          <div className="col-md-6 pe-5">
            Freelancer is a free bootstrap theme created by Route. The download includes <br /> the complete source files including HTML, CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.
          </div>
        </div>
      </div>
    </div>
  </>
}
