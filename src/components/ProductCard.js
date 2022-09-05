import React, { Component } from "react";
import cart from "../images/Common.png";

export default class ProductCard extends Component {
  render() {
    // <=== item in the props ====>
    const { name, price, image } = this.props.item;
    // <=== event in the props ====>
    const { handleProductCart } = this.props;

    return (
      <div className="product-card-container" style={styles.productContainer}>
        <img src={image} alt="product-one" style={styles.productImage} />
        <h2 style={styles.productName}>{name}</h2>
        <h2 style={styles.productPrice}>{price}</h2>
        <div className="card-cart-button" onClick={() => handleProductCart()}>
          <img src={cart} alt="cart-button" />
        </div>
      </div>
    );
  }
}

// <==== PRODUCT CARD REUSABLE COMPONENT STYLES ====>

const styles = {
  productContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    background: "#FFFFFF",
    height: "420px",
    flexWrap: "nowrap",
    maxWidth: "386px",
    marginTop: "10px",
    marginBottom: "10px"
  },
  productImage: {
    width: "100%",
    height: "338px",
    objectFit: "cover",
    objectPosition: "80% 100%",
  },
  productName: {
    fontWeight: "200",
  },
  productPrice: {
    fontWeight: 500,
    fontSize: "18px",
    marginTop: "-10px",
  },
};
