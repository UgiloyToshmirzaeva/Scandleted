import React from "react";
import './Card.css'
import Button from "./Button";

const Card = ({ name, price, discount, imageUrl, scent }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={name} />
            <div className="prod">
                <h2>{name}</h2>
                <p> ${price}</p>
                <del>{discount}$</del>
            </div>
            <h4>{scent}</h4>

            <Button styleType="style2" buttonText={<><img style={{width: '30px'}} src='https://i.pinimg.com/474x/9d/08/cc/9d08cc2022b1d219c5cc54ac8d8ebe31.jpg' alt="plus icon" /> ADD TO CART</>}></Button>
        </div>
    );
};

export default Card;

