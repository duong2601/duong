import React from 'react';
import "./footer.css";
import logo1 from "../components/image/logorbg.png"

export default function Footer() {
    return (
        <div>

            <>

                <footer className="footer-distributed">
                    <div className="footer-left">
                        <img src={logo1} alt="" />
                        <p className="footer-links">
                            <a href="#" className="link-1">
                                Home
                            </a>
                            <a href="#">Blog</a>
                            <a href="#">Pricing</a>
                            <a href="#">About</a>
                            <a href="#">Faq</a>
                            <a href="#">Contact</a>
                        </p>
                        <p className="footer-company-name">Company Name © 2015</p>
                    </div>
                    <div className="footer-center">
                        <div>
                            <i className="fa fa-map-marker" />
                            <p>
                                <span>444 S. Cedros Ave</span> Solana Beach, California
                            </p>
                        </div>
                        <div>
                            <i className="fa fa-phone" />
                            <p>+1.555.555.5555</p>
                        </div>
                        <div>
                            <i className="fa fa-envelope" />
                            <p>
                                <a href="mailto:support@company.com">support@company.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p className="footer-company-about">
                            <span>About the company</span>
                            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod
                            convallis velit, eu auctor lacus vehicula sit amet.
                        </p>
                        <div className="footer-icons">
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-staylinked"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-github-alt"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </>



        </div>
    )
}
