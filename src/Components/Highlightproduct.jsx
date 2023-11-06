import React from "react";
import './Highlightproduct.css'
import Button from './Button'

function Highlightproduct(params) {
    return(
        <div className="mainProduct">
         <img style={{height:'60vh', width:'55%', zIndex:'999'}} src="https://i.ibb.co/zfY0RWY/Products.png" alt="" />
         <Button styleType="style1"  buttonText="FIND PRODUCT"></Button>
        </div>
    )
}

export default Highlightproduct
