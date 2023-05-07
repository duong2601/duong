import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';
export default function ManageUser() {
  const [userDriver, setUserDriver] = useState([]);
  const [search, setSearch] = useState("");
  const [infor, setInfor] = useState({});
  const [isSearch, setIsSearch] = useState(false)

  //tai du lieu
  const loadData = async () => {
    return await axios
      .get("http://localhost:8000/userDriver")
      .then((res) => setUserDriver(res.data))
      .catch((error) => console.log(error));
  }
  const handleSearch = async () => {
    return await axios
      .get(
        `http://localhost:8000/userDriver?name=${search}&phoneNumber=${search}`
      )
      .then((res) => {
        setInfor(res.data)
      })
      .catch((error) => console.log(error));
  };
  console.log(infor);

  useEffect(() => {
    loadData();
  }, []);
  const handleShowAll = async () => {
    return await axios
      .get(`http://localhost:8000/userDriver?name=${search}&phoneNumber=${search}`)
  }
  /**
   * @param {*} id id truyền vào
   */
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8000/userDriver/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    loadData();
    setTimeout(() => {
      alert("Xóa thành công.");
    }, 200);
  }
  console.log("Search", isSearch);
  return (
    <div>
      <h3>Quản lý người đăng ký lái thử</h3>
      <div className="input-group" style={{ width: 400 }}>
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm theo tên hoặc email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />
        {/* <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => setIsSearch(pre => !pre)}
        >
          Tìm kiếm
        </button><br /> */}

        {isSearch ? (
          <button onClick={handleShowAll}>Hiển thị tất cả</button>
        ) : (
          <button onClick={() => setIsSearch(pre => !pre)}>Tìm kiếm</button>
        )}
      </div>

      {/**bang hien thi ten nguoi dang ky muosn lai thu */}
      <table >
        <thead>
          <th>Mã ID</th>
          <th>Tên khách hàng</th>
          <th>Email</th>
          <th>Số điện thoại</th>
          <th>Ngày đăng ký lái thử</th>
          <th>Tùy chọn</th>
        </thead>
        <tbody>

          {userDriver.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.testDrive}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Xóa</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  )
}
