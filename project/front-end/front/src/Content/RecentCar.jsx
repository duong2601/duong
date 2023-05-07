import React from 'react';
import '../Content/recentCar.css'

export default function RecentCar() {
    return (
        <div>
            <div>
                <h3>KHÁM PHÁ CÁC MẪU XE GẦN ĐÂY</h3>
                <p>Mẫu mã thiết kế mới mang lại sự trải nghiệm mới tinh tế hơn trong từng chi tiết</p>
            </div>
            <div id='cardImg'>
                <div className="card" style={{ width: "18rem" }}>
                    <div id='img1'></div>
                    <div className="card-body">
                        <h5 className="card-title">Cam hybrid Grey</h5>
                        <p className="card-icon">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>


                <div className="card" style={{ width: "18rem" }}>
                    <div id='img2'></div>
                    <div className="card-body">
                        <h5 className="card-title"> Cam hybrid White</h5>
                        <p className="card-icon">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <div id='img3'></div>
                    <div className="card-body">
                        <h5 className="card-title">Cam hybrid Navy</h5>
                        <p className="card-icon">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}