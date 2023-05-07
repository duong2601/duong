import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LayoutNavbar from '../home/LayoutNavbar';
import Footer from './Footer';


export default function Products() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const loadProducts = async () => {
    const products = await axios.get(" http://localhost:8000/products")
    setProduct(products.data)

  }

  useEffect(() => {
    loadProducts();
  }, [])

  const handleTestDrive = () => {
    navigate('/')
  }

  return (
    <>
      <LayoutNavbar />
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", rowGap: "50px" }}> {product.map((e) => (
        <div className="card" style={{ width: "18rem" }}>
          <img src={e.img} className="card-img-top" alt="..." />
          <div className="card-body" style={{ display: "flex", flexDirection: "column", }}>
            <h5 className="card-title" style={{ width: "100%", objectFit: "cover" }}>{e.name}</h5>
            <span className="card-text" style={{ width: "100%", objectFit: "cover", marginBottom: "10px" }}>
              {e.tittle}
            </span>
            <span>price:{e.price}</span>

            <Link to='/' data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary">
              Đăng ký lái thử
            </Link>

          </div>
        </div>
      ))}
      </div >
      {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  )
}
