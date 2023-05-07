import React from 'react'
import icon from "../components/image/register-test-car.png";
import icon1 from "../components/image/du-toan-chi-phi-icon.png";
import icon2 from "../components/image/taicatalogue.png";
import './MenuDetail.css'
export default function MenuDetail() {

  return (
    <div className='menuDetail'>
      <div className='icon' id='testDrive'>
        <img src={icon} alt="" />
        <p>Đăng ký lái thử</p>
      </div>
      <div className='icon'>
        <img src={icon1} alt="" />
        <p>Dự toán chi phí</p>
      </div>
      <div className='icon'  >
        <img src={icon2} alt="" id='img3' />
        <p>Tải catalogue</p>
      </div>
    </div>
  )
}
