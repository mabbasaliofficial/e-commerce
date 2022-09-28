import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Product.css'

const Product = (props) => {
    const {product, handler} = props;
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
      <p className="product-name">{name}</p>
      <p>Price ${price}</p>
        <p>Seller {seller}</p>
        <p><small>Ratings {ratings}</small></p>
      </div>
      <button onClick={() => handler(product)} className="btn-cart">
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
