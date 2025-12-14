import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return <>
    <div className={`pt-4 ${style.contact}`}>
      <h2 className='fw-bolder text-center fs-1 mb-3' style={{color: 'rgb(44, 62, 80)'}}>CONTACT SECTION</h2>
      <div className='d-flex align-items-center justify-content-center mb-3'>
              <div className={`me-3 ${style.line}`}></div>
              <i className='fas fa-star' style={{color: 'rgb(44, 62, 80)'}}></i>
              <div className={`ms-3 ${style.line}`}></div>
      </div>
      <form className='w-50 p-3 mx-auto mt-5'>
        
        <input type="text" id='userName' placeholder='userName' className='form-control border-0 border-bottom py-3 position-relative mb-3' />
        
        <input type="text" id='userName' placeholder='userAge' className='form-control border-0 border-bottom py-3 position-relative mb-3' />
        
        <input type="text" id='userName' placeholder='userEmail' className='form-control border-0 border-bottom py-3 position-relative mb-3' />
        
        <input type="text" id='userName' placeholder='userPassword' className='form-control border-0 border-bottom py-3 position-relative mb-3' />
        <button type="button" className="btn mt-4 text-white" style={{backgroundColor: '#1abc9c'}}> send Message </button>
      </form>
    </div>
  </>
}
