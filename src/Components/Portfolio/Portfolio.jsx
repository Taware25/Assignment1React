import React, { useState } from 'react'
import style from './Portfolio.module.css'
import logo from '../../assets/poert1.png'
import cakeLogo from '../../assets/port2.png'
import circusLogo from '../../assets/port3.png'

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null)
  return <>
    <div className={`text-center ${style.portfolio}`} style={{paddingTop: '150px'}}>
      <h2 className='fw-bolder fs-1 mb-3' style={{color: 'rgb(44, 62, 80)'}}>PORTFOLIO COMPONENT</h2>
      <div className='d-flex align-items-center justify-content-center mb-3'>
              <div className={`me-3 ${style.line}`}></div>
              <i className='fas fa-star' style={{color: 'rgb(44, 62, 80)'}}></i>
              <div className={`ms-3 ${style.line}`}></div>
      </div>
      <div className="container pb-4">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className={style.portfolioItem} onClick={() => setSelectedImage(logo)}>
              <img src={logo} className='w-100 rounded-3' alt="logo" />
              <div className={style.portfolioHover}>
                <div className="portfolio-hover-content">
                  <i className='fas fa-plus fa-5x text-white'></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={style.portfolioItem} onClick={() => setSelectedImage(cakeLogo)}>
              <img src={cakeLogo} className='w-100 rounded-3' alt="logo" />
              <div className={style.portfolioHover}>
                <div className="portfolio-hover-content">
                  <i className='fas fa-plus fa-5x text-white'></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={style.portfolioItem} onClick={() => setSelectedImage(circusLogo)}>
              <img src={circusLogo} className='w-100 rounded-3' alt="logo" />
              <div className={style.portfolioHover}>
                <div className="portfolio-hover-content">
                  <i className='fas fa-plus fa-5x text-white'></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={style.portfolioItem} onClick={() => setSelectedImage(logo)}>
              <img src={logo} className='w-100 rounded-3' alt="logo" />
              <div className={style.portfolioHover}>
                <div className="portfolio-hover-content">
                  <i className='fas fa-plus fa-5x text-white'></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={style.portfolioItem} onClick={() => setSelectedImage(cakeLogo)}>
              <img src={cakeLogo} className='w-100 rounded-3' alt="logo" />
              <div className={style.portfolioHover}>
                <div className="portfolio-hover-content">
                  <i className='fas fa-plus fa-5x text-white'></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className={style.portfolioItem} onClick={() => setSelectedImage(circusLogo)}>
              <img src={circusLogo} className='w-100 rounded-3' alt="logo" />
              <div className={style.portfolioHover}>
                <div className="portfolio-hover-content">
                  <i className='fas fa-plus fa-5x text-white'></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {selectedImage && (
          <div className={style.modal} onClick={() => setSelectedImage(null)}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="selected" />
            </div>
          </div>
        )}
        </div>
      </div>
    
  </>
}
