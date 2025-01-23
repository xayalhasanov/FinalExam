import React from 'react'
import { FaArrowRight, FaBasketballBall, FaBehance, FaFacebook, FaHeart, FaTwitter} from "react-icons/fa"
import { Link } from 'react-router'
import "./userfooter.css"

function Userfooter() {
    return (
        <div className="footerr">
            <div className="footerr-top">
                <div className="topsec"><h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p></div>
                <div className="topsec"><h3>Newsletter</h3>
                <p>Stay update with our latest</p>
                <div className="footinput"> 
                    <input type="email" placeholder='Email Address'/>
                    {/* <input type="email" placeholder='email adress' /> */}
                    <button><FaArrowRight/></button></div>
                </div>
                <div className="topsec">
                    <h3>Instragram Feed</h3>
                    <div className="footimage">
                        <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/shop/img/i4.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/shop/img/i5.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/shop/img/i6.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/shop/img/i7.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/shop/img/i8.jpg" alt="" />
                    </div>
                </div>
                <div className="topsec">
                    <h3>Follow Us</h3>
                    <p>Let us be social</p>
                    <div className="footicons">
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaBasketballBall/>
                        <FaBehance/>
                    </div>
                </div>
            </div>
            <div className="footerr-bottom">
                <p>Copyright ©2025 All rights reserved | This template is made with <FaHeart className='footlink' />  by <Link className='footlink1' >Colorlib</Link></p>
            </div>
        </div>
    )
}

export default Userfooter