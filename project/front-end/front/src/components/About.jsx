import React from 'react';
import './About.css';
import image from './image/car1.jpg';
import LayoutNavbar from '../home/LayoutNavbar';
import Footer from './Footer';

export default function About() {
  return (
    <>
      <LayoutNavbar />
      <div className='about'>
        <div className='column'>
          <h3>ABOUT</h3>
          <p id='lorem'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolore quas ea modi quae, doloribus dolorum maiores quaerat
            ducimus saepe sunt dolores tempora dolorem,
            recusandae perspiciatis illo illum amet pariatur odio.
          </p>
        </div>
        <div className="row">
          <div className="column">
            <img src="https://cms-i.autodaily.vn/du-lieu/2022/05/16/2023-toyota-camry-5.jpg" />
            <img src="https://i2-vnexpress.vnecdn.net/2021/12/20/Toyota-Camry-2.jpg?w=2400&h=0&q=100&dpr=1&fit=crop&s=E_nLihYLQHwiMYiAZ1quqw&t=image" />
            <img src="https://static.wixstatic.com/media/b4dcef_2d445258df7c400bbfc979ba6177394b~mv2.png/v1/fill/w_960,h_535,al_c,lg_1,q_90/b4dcef_2d445258df7c400bbfc979ba6177394b~mv2.png" />
          </div>
          <div className="column">
            <img src="https://xetoyotathanhxuan.vn/wp-content/uploads/2019/09/toyota-camry-2019cafeautovn1-1533577119.jpg" />
            <img src="https://static1.cafeland.vn/cafeautoData/upload/tintuc/thitruong/2022/08/tuan-01/toyotacamrythehemoibanphachoacafeautovn1-1659434192.jpg" />
            <img src="https://thitruongoto.com.vn/uploads/news/2022_10/toyota-camry-so-huu-ve-ngoai-moi-me-tre-trung-tinh-te-va-hien-dai.png" />
          </div>
          <div className="column">
            <img src="https://static.wixstatic.com/media/b4dcef_2d445258df7c400bbfc979ba6177394b~mv2.png/v1/fill/w_960,h_535,al_c,lg_1,q_90/b4dcef_2d445258df7c400bbfc979ba6177394b~mv2.png" />
            <img src="https://i2-vnexpress.vnecdn.net/2021/12/20/Toyota-Camry-2.jpg?w=2400&h=0&q=100&dpr=1&fit=crop&s=E_nLihYLQHwiMYiAZ1quqw&t=image" />
            <img src="https://cms-i.autodaily.vn/du-lieu/2022/05/16/2023-toyota-camry-5.jpg" />
          </div>

        </div>

      </div>
      <Footer/>
    </>
  )
}
