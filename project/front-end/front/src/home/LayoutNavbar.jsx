import React from 'react';
import '../home/LayoutNavbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../components/image/logorbg.png';
import { useNavigate } from 'react-router-dom';


export default function LayoutNavbar() {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  }

  let user = localStorage.getItem("user")
  // console.log(flag);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/login')


  }
  return (
    <div>

      <nav id='navbar'>
        <div className="container-fluid">
          <NavLink to='/' className="navbar-brand">
            <img src={logo} alt="" />
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline" type="submit">
                Search
              </button>
            </form> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className="nav-link active" aria-current="page" >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className="nav-link active" aria-current="page" >
                  Về chúng tôi
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/product' className="nav-link" >
                  Sản phẩm
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/menu' className="nav-link" >
                  Bảng giá
                </NavLink>
              </li>
              {/* {user != null ? (<li className="nav-item">
                <NavLink to='/login' className="nav-link">
                  <button onClick={handleLogout}>Đăng xuất</button>

                </NavLink>
              </li>) : (<li className="nav-item">
                <NavLink to='/login' className="nav-link" >
                  <button onClick={handleLogin}>Đăng nhập</button>
                </NavLink>
              </li>)
              } */}

            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}
