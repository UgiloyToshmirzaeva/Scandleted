import React from 'react'
import Card from './Card'
import './Shop.css'
import Button from './Button'

const Shop = () => {
    const products = [
        { name: 'Vanilla Relax', price: 29, discount: 5, scent: 'Cake Smell', imageUrl: 'https://i.ibb.co/PMvgdVF/Image-10.png' },
        { name: 'Beach Sunshine', price: 40, discount: 43, scent: 'Enjoy the afternoon',imageUrl: 'https://i.ibb.co/TkbvHsG/Image-9.png' },
        { name: 'Brown Relax', price: 33, discount: 38, scent: 'Together in the afternoon', imageUrl: 'https://i.ibb.co/j4NtpGT/Image-8.png' },
        { name: 'Moon Morning', price: 42, discount: 45, scent: 'The scent of the morning', imageUrl: 'https://i.ibb.co/wzmnBnq/photo-2023-11-04-23-33-00.jpg' }
    ];

    return (
        <div className="shoppingPage">
            <p className="trending">TRENDING</p>
            <h1 className="shop">Shop our popular candle products</h1>

            <div className="shop">
              {products.map((product, index) => (
                  <Card key={index} {...product} />
               ))}
            </div>

            <div className="experience">
                <h1 className="off"><mark>35%</mark>OFF</h1>
                <p className="off">Make the most of your</p>
                <p className="off">#scandlexexperience</p>
            </div>

            
            <Button styleType="style2" buttonText="ADD TO CART"></Button>



        </div>
    );
}
export default Shop;