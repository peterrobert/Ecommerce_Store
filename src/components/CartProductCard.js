import React, { Component } from "react";
import CartSizeButton from "./CartSizeButton";

export default class CartProductCard extends Component {
  render() {
    return (
      <div
        className="cart-product-container"
        style={styles.cartProductContainer}
      >
        <div className="border-line" style={styles.borderLine} />
        <div className="card-container" style={styles.cardContainer}>
          <div className="card-info" style={styles.cardInfo}>
            <h2>Apollo</h2>
            <h1>Running short</h1>
            <h3>$50</h3>

            <div
              className="cart-size-button-container"
              
            >
              <h4>SIZE:</h4>
              <div style={styles.cartSizeButtonContainer}>
              <CartSizeButton sizeValue= "xl" />
              <CartSizeButton sizeValue= "s" />
              <CartSizeButton sizeValue= "M"/>
              <CartSizeButton  sizeValue= "l" />
              </div>
            
            </div>

            <div className="size-buttons"></div>

            <div className="color-buttons"></div>
          </div>
          <div
            className="card-image-slider"
            style={styles.cardImageSlider}
          ></div>
        </div>
      </div>
    );
  }
}

// <==== CART PRODUCT CARD REUSABLE COMPONENT STYLES ====>
const styles = {
  cartProductContainer: {
    paddingRight: "50px",
    paddingLeft: "50px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  borderLine: {
    background: "#E5E5E5",
    width: "100%",
    height: "1px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  cardInfo: {
    flex: 1,
  },
  cardImageSlider: {
    flex: 3,
  },
  cartSizeButtonContainer: {
    display: "flex",
    flexWrap: "nowrap",
  },
};
