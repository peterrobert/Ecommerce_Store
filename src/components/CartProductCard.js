import React, { Component } from "react";
import CartColorButton from "./CartColorButton";
import CartSizeButton from "./CartSizeButton";
import ImageSlider from "./ImageSlider";

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

            <div className="cart-size-button-container">
              <h4>SIZE:</h4>
              <div style={styles.cartSizeButtonContainer}>
                <CartSizeButton sizeValue="xl" />
                <CartSizeButton sizeValue="s" />
                <CartSizeButton sizeValue="M" />
                <CartSizeButton sizeValue="l" />
              </div>
            </div>

            <div className="cart-size-button-container">
              <h4>COLOR:</h4>
              <div style={styles.cartColorButtonContainer}>
                <CartColorButton color="#D3D2D5" />
                <CartColorButton color="#2B2B2B" />
                <CartColorButton color="#0F6450" />
              </div>
            </div>
          </div>
          <div
            className="card-image-slider-container"
            style={styles.cardImageSlider}
          >
            <div
              className="increment-decrement-buttons"
              style={styles.incrementDecrementButtons}
            >
              <div style={styles.incrementButton}>
                <CartSizeButton sizeValue="+" />
              </div>
              <div style={styles.incrementValue}>
                <h1 className="incrementing-value">1</h1>
              </div>
              <div style={styles.decrementButton}>
                <CartSizeButton sizeValue="-" />
              </div>
            </div>

            <div className="slider-container" style={styles.sliderContainer}>
              <ImageSlider />
            </div>
          </div>
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
    flexWrap: "nowrap",
  },
  cardInfo: {
    flex: 1,
  },
  cardImageSlider: {
    flex: 3,
    display: "flex",
    justifyContent: "flex-end",
  },
  cartSizeButtonContainer: {
    display: "flex",
    flexWrap: "nowrap",
  },

  cartColorButtonContainer: {
    display: "flex",
    flexWrap: "nowrap",
    marginBottom: "20px",
  },
  sliderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  incrementDecrementButtons: {
    display: "flex",
    flexDirection: "column",
  },
  incrementButton: {
    marginTop: "15px",
    flex: 1,
  },
  incrementValue: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  decrementButton: {
    marginBottom: "15px",
  },
};
