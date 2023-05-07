import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { Link } from 'react-router-dom';
import LayoutNavbar from '../home/LayoutNavbar';


export default function TestDrive() {
    const [show, setShow] = useState(true);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [testDrive, setTestDrive] = useState('');
    const handleClose = () => setShow(false);
    const error = [];

    // Kiểm tra các trường để trống
    const checkEmpty = (field) => {
        if (field === "" || field === null || field === undefined) {
            return false
        } else {
            return true;
        }
    }

    // Validate dữ liệu đầu vào
    const validate = () => {
        // Kiểm tra tên người dùng không được để trống
        if (!checkEmpty(name)) {
            error.push('Tên không được để trống');
            alert('Tên không được để trống');
            return;
        }
        // Kiểm tra tên người dùng không được để trống
        if (!checkEmpty(phoneNumber)) {
            error.push('Số điện thoại không được để trống');
            alert('Số điện thoại không được để trống');
            return;
        }
        // Kiểm tra email không được để trống
        if (!checkEmpty(email)) {
            error.push('Email không được để trống');
            alert('Email không được để trống');
            return;
        }
        // Kiểm tra số điện không được để trống
        if (!checkEmpty(phoneNumber)) {
            error.push('Số điện thoại không được để trống');
            alert('Số điện thoại không được để trống');
            return;
        }
        // Kiểm tra độ dài của mảng lỗi. Nếu độ dài của mảng > 0 thì return false
        if (error.length > 0) {
            return false;
        } else {
            return true;
        }
    }

    // Xử lý sự kiện submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = validate();
        if (valid) {
            // Gọi api
            axios.post('http://localhost:8000/userDriver', {
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                testDrive: testDrive
            }).then(res => {
                if (res.request.status === 201) {
                    console.log(res);
                    alert('Đăng ký thành công')
                } else {
                    alert('Đăng ký thất bại')
                }
            }).
                catch(err => console.log(err))
        }
    }

    return (
        <div>
            <>
                <Modal className='modal-regiser' style={{ zIndex: 100000, display: "flex" }} show={show} onHide={handleClose}>
                    <form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title
                            >ĐĂNG KÝ LÁI THỬ
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ display: "flex", width: "200px" }}>

                            <div><input
                                className='form-control mb-3'
                                type="text" name="name"
                                placeholder='Họ và tên*'
                                onChange={(e) => setName(e.target.value)} />
                                <input className='form-control mb-3'
                                    type="text" name="phoneNumber"
                                    placeholder='Số điện thoại*'
                                    onChange={(e) => setPhoneNumber(e.target.value)} />
                                <input className='form-control mb-3'
                                    type="text" name="mail"
                                    placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)} />
                                <input className='form-control mb-3'
                                    type="date" name="testDrive"
                                    placeholder='Dự định lái thử xe'
                                    onChange={(e) => setTestDrive(e.target.value)} /> <br />
                                <button
                                    className='btn btn-primary'
                                    type='submit'
                                >Đăng ký</button>
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <span>Bằng cách nhấp vào Đăng ký ngay,
                                Khách hàng đồng ý gửi thông tin của mình tới Cam Việt Nam.<br />
                                <b>Bạn đã đăng ký lái thử ? Xem thêm chi tiết <Link to="/inforUser">tại đây</Link></b>
                            </span>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        </div>
    )
}
