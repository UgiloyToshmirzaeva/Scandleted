import React from "react";
import './Showcase.css'
import Button from './Button'

const Showcase = () => {
    return(
        <div className="showcase">
            <p className="free-shipping">
            FREE Shipping on orders over $100 🎉
            </p>
            <nav>
                <ul>
                    <li><a href="./Shop">Shop</a></li>
                    <li><a href="./FAQs">ABOUT</a></li>
                    <li><a href="./Features">BLOG</a></li>
                    <li><a href="./Highlight-product">TESTIMONIALS</a></li>
                </ul>
                <div className="right-nav">
                    <img className="logo" src="https://i.ibb.co/nf7P2PR/Logo.png" alt="" />
                    <div className="icns-and-btn">
                        <a href="#"><img src="https://i.ibb.co/ft3KRg9/search-normal.png" alt="" /> </a>
                        <a href="#"><img src="https://i.ibb.co/FYYPMy1/user.png" alt="" /> </a>
                        <a href="#"><img src="https://i.ibb.co/85JkKwL/bag.png" alt="" /> </a>
                        <Button buttonText="LOG IN" styleType="style2"/>
                    </div>



                </div>
            </nav>
            <div className="showcase-body">
                <img src="https://i.ibb.co/ctCg2fB/Image-12.png" alt="" className="left-showcase" />
                <div className="showcase-content">
                    <p>#SCANDLEXPERIENCE</p>
                    <h1>Always <mark className="brown-mark">cool and soothe</mark> your feelings available in a variety of <mark className="font">candle</mark></h1>
                    <Button id="btn" styleType="style1" buttonText="DISCOVER PRODUCTS"/>
                </div>
            </div>





        </div>
    )
}
export default Showcase;