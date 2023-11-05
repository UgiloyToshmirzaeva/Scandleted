import React from "react";
import './Highlightproduct.css'
import Button from './Button'

function Highlightproduct(params) {
    return(
        <div className="mainProduct">
            <h1 >Room For</h1>
            <h1 className="second">Fragrance</h1>
         <img style={{height:'60vh', width:'65%', zIndex:'999'}} src="https://o.remove.bg/downloads/407dd04b-1186-4927-aaca-6b83bcf3ed8d/amber-glass-candle-jar-box-mockup_358694-4485-removebg-preview.png" alt="" />
         <Button styleType="style1"  buttonText="FIND PRODUCT"></Button>
        </div>
    )
}

export default Highlightproduct
