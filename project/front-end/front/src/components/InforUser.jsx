import React, { useEffect, useState } from 'react';
import "../components/inforUser.css"
import axios from 'axios';
import LayoutNavbar from '../home/LayoutNavbar';
import { useNavigate } from 'react-router-dom';


export default function InforUser() {
    const [userName, setUserName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [userInfo, setUserInfo] = useState([])
    const [datas, setDatas] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nameEdit, setNameEdit] = useState('')
    const [phoneEdit, setPhoneEdit] = useState('')
    const [emailEdit, setEmailEdit] = useState('')
    const [dateRigister, setDateRegister] = useState('')
    const navigate = useNavigate()


    // Xem thong tin user
    const showInfo = () => {
        setIsModalOpen(true);
        axios.get(`http://localhost:8000/userDriver?name=${userName}&phoneNumber=${phoneNumber}`)
            .then(res => setDatas(res.data))
            .catch(err => console.log(err))
    }

    // update user
    const handleUpdate = (data) => {
        setDateRegister(data.testDrive);
        setNameEdit(data.name)
        setEmailEdit(data.email);
        setPhoneEdit(data.phoneNumber)
    }

    // Save edit 
    const handleSave = (id) => {
        axios.put(`http://localhost:8000/userDriver/${id}`, {
            name: nameEdit,
            phoneNumber: phoneEdit,
            email: emailEdit,
            testDrive: dateRigister
        })
            .then(res => {
                console.log(res.request.status);
            })
            .catch(err => console.log(err))
        setIsModalOpen(false);
        alert('Chỉnh sửa thông tin thành công')
        navigate('/')

    }

    return (
        <>
            <LayoutNavbar />
            <h3>XIN MỜI ĐIỀN THÔNG TIN CÁ NHÂN</h3>
            <input type="text" placeholder='Nhập họ và tên' value={userName} onChange={(e) => setUserName(e.target.value)} /><br />
            <input type="text" placeholder='Nhập số điện thoại' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} /><br />
            <button onClick={showInfo}>Xem thông tin </button>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Họ và tên</th>
                    <th>Số điện thoại</th>
                    <th>Emai đăng ký</th>
                    <th>Ngày đăng ký lái thử</th>
                    <th>Lựa chọn</th>
                </tr>
                {datas.map((data) => {
                    return (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.email}</td>
                            <td>{data.testDrive}</td>
                            <td>
                                <button onClick={() => handleUpdate(data)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Chỉnh sửa
                                </button>
                                {
                                    isModalOpen ? (
                                        <div style={{ backgroundColor: 'none' }} class="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>

                                                    <div class="modal-body">
                                                        <label htmlFor="">Họ và tên:</label><br />
                                                        <input
                                                            onChange={(e) => setNameEdit(e.target.value)}
                                                            value={nameEdit}
                                                            type="text"
                                                        /><br />
                                                        <label htmlFor="">Email:</label><br />
                                                        <input
                                                            onChange={(e) => setEmailEdit(e.target.value)}
                                                            value={emailEdit}
                                                            type="text"
                                                        /><br />
                                                        <label htmlFor="">Số điện thoại:</label><br />
                                                        <input
                                                            onChange={(e) => setPhoneEdit(e.target.value)}
                                                            value={phoneEdit}
                                                            type="text"
                                                        /><br />
                                                        <label htmlFor="" >Chọn Ngày lái thử:</label><br />
                                                        <input
                                                            onChange={(e) => setDateRegister(e.target.value)}
                                                            value={dateRigister}
                                                            type="date"
                                                        /><br />
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button onClick={() => handleSave(data.id)} type="button" class="btn btn-primary">Lưu</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (<></>)
                                }
                            </td>
                        </tr>
                    )
                }
                )}
            </table>

        </>
    )

}


