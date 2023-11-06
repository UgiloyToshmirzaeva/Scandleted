import React from "react";
import './Features.css'


function Features(params) {
    return(
        <div className='featuresPage'>
<img src="https://images.photowall.com/products/76333/majestic-leaves-sepia-dreams.jpg?h=699&q=85" style={{width:'100%', height:'55vh'}} alt="" />
<p style={{paddingTop:'7px',paddingBottom:'40px', width:'50%'}}>We make products with quality materials so you get a very good product</p>
<div className='card1'>
<img style={{width:'95%', height:'90vh'}} src="https://images.pexels.com/photos/8484052/pexels-photo-8484052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
<div className='mini-card'>
    <img style={{height:'50vh', width:'100%'}} src="https://resourceboy.com/wp-content/uploads/2023/05/perspective-view-of-business-card-mockup-with-small-candle-2.jpg" alt="" />
    <div className='div'>
        <h2 style={{fontSize:'35px'}}>Durable</h2>
        <p>The life of the candle reaches 6 months since it is used and still feels the smell</p>
    </div>
</div>
</div>
<div className='card2' style={{paddingTop:'70px'}}>

<div className='min-card'>
    <img src="https://images.pexels.com/photos/6633940/pexels-photo-6633940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width:'85%', height:'60vh', paddingRight:'40px'}} alt="" />
    <div className='div'>
        <h2 style={{fontSize:'35px'}}>Calm</h2>
        <p>The aroma emitted by the candles soothes the feeling and the room is of course very durable</p>
    </div>
</div>
<img style={{width:'90%', height:'85vh'}} src="https://i.ibb.co/ZSvZvpP/Image-15.png" alt="" />
</div>

        </div>
    )
}

export default Features