import React from 'react'
import style from './Home.module.css'
import logo from '../../assets/avataaars.svg'

export default function Home() {
  return <>
  
    <div className={`d-flex justify-content-center align-items-center text-white flex-column ${style.home}`} style={{paddingTop: '170px' , paddingBottom: '90px'}}>
      <img src={logo} alt="logo" className={`mb-3 ${style.img}`} />
      <h2 className='fw-bolder fs-1 mb-3 pt-4'>START FRAMEWORK</h2>
      <div className='d-flex align-items-center justify-content-center mb-3'>
        <div className={`me-3 ${style.line}`}></div>
        <i className='fas fa-star'></i>
        <div className={`ms-3 ${style.line}`}></div>
      </div>
      <div>Graphic Artist - Web Designer - Illustrator</div>
    </div>

  
  
  </>
}
