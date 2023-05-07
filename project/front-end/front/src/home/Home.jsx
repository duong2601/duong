import React from 'react'
import Carousel from './Carousel'
import LayoutNavbar from './LayoutNavbar'
import MenuDetail from './MenuDetail'
import imgHeader from '../components/image/head-image.jpg'
import '../home/home.css'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <LayoutNavbar />
      <img src={imgHeader} alt="" />
      <MenuDetail />
      {/* <div className='mainPage'>
        <div className='mainPageText'>
          <span >Mang lại tiện nghi <br />
            Tỉ mỉ trong từng chi tiết
          </span>
          <h2>CAM DUONG</h2>
          <p>Hiện thực của công nghệ mang đên những trải nghiệm tuyệt vời </p>
        </div>
        <div className='mainPageImg'>
          <img src='https://auto365.vn/uploads/upload/images/led-vien-noi-that-cho-vinfast-lux-sa-2_0.jpg' alt="" />
        </div>
      </div> */}
      <Carousel />
      <Footer />
    </div>
  )
}
