import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../components/login.css"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const navigate = useNavigate();
    const error = [];
    //ham xu ly dang nhap
    const handleLogin = () => {
       
        //kiem tra ham validate
        let isValid = validate();
        if (isValid) {
            axios.post("http://localhost:8000/login", {
                email: email,
                password: password,
                permission: 1

            }).then((res) => {
                if (res.status == 200) {
                    console.log(res);
                    localStorage.setItem("users", JSON.stringify(res.data));
                    // Chuyển hướng sang trang quản ly
                    // Nếu quyền là admin thì chuyển hươngs về trang admin
                    if (res.data.user.permission === 1) {

                       navigate('/manage_user')
                    } else {

                    }
                    setTimeout(() => {
                        alert("Đăng nhập thành công");
                    }, 200);
                }
            })
                .catch((err) => {
                    if (err.response.status === 404) {
                        alert("Đăng nhập thất bại");
                    }
                });
        }
    }
    //ham kiem tra cac truong rong
    const checkEmpty = (field) => {
        if (field == null || field == undefined || field == "") {
            return (true);
        } else {
            return (false);
        }

    }
    //validate
    const validate = () => {
        if (checkEmpty(email)) {
            setErrorEmail(true);
            error.push("email không được phép để trống");

        } else {
            setErrorEmail(false);
        }
        if (checkEmpty(password)) {
            setErrorPassword(true);
            error.push('password khong duoc de trong')

        } else {
            setErrorPassword(false)
        }
        if (error.length > 0) {
            return (false);
        } else {
            return (true);
        }
    }
    return (
        <div >

        
            <h3>Đăng nhập admin</h3>

            <div className="mb-3">

                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errorEmail ? (
                    <div id="emailHelp" className="form-text">
                        Email không được để trống.
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className="mb-3">

                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="pls enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {errorPassword ? (
                <div id="emailHelp" className="form-text">
                    Mật khẩu không được để trống.
                </div>
            ) : (
                ""
            )}
            <button onClick={handleLogin}>Đăng nhập</button>


      
        </div>
    )
}
