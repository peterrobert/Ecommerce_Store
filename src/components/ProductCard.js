import React, { Component } from "react";
import CartContext from "../context/cartContext";
import CurrencyContext from "../context/currencyContext";
import cart from "../images/Common.png";

export default class ProductCard extends Component {
  
  displayPrice = () => {
    const {prices} = this.props.item;
    const {appGlobalCurrency} = this.context

    let results = prices.filter((value) => {
      if (value.currency.label === appGlobalCurrency.label) return value.amount
    })
    return results[0].amount
  }

  render() {
    // <=== item in the props ====>
    const { name, gallery, inStock } = this.props.item;
    // <=== event in the props ====>
    const { handleProductCart } = this.props;
    // <=== Context ====>
    const {appGlobalCurrency} = this.context
    return (
      <div
        className="product-card-container"
        style={inStock ? styles.productContainer : styles.outOfStock}
      >
        {inStock ? null : (
          <div
            className="out-of-stock-container"
            style={styles.outOfStockContainer}
          >
            <h4 style={styles.outOfStockText}>Out Of Stock</h4>
          </div>
        )}

        <img src={gallery[0]} alt="product-one" style={styles.productImage} />
        <h2 style={styles.productName}>{name}</h2>
        <h2 style={styles.productPrice}>{appGlobalCurrency.symbol} {this.displayPrice()} </h2>
        <div className="card-cart-button" onClick={() => handleProductCart(this.props.item)}>
          <img src={cart} alt="cart-button" />
        </div>
      </div>
    );
  }
}

// <==== SET THE CONTEXT TYPES ====>
ProductCard.contextType = CurrencyContext


// <==== PRODUCT CARD REUSABLE COMPONENT STYLES ====>

const styles = {
  productContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    background: "#FFFFFF",
    minHeight: "420px",
    flexWrap: "nowrap",
    maxWidth: "386px",
    minWidth: "386px",
    marginTop: "10px",
    marginBottom: "10px",
    cursor: "pointer",
  },

  outOfStock: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    background: "#FFFFFF",
    minHeight: "420px",
    flexWrap: "nowrap",
    maxWidth: "386px",
    minWidth: "386px",
    marginTop: "10px",
    marginBottom: "10px",
    opacity: 0.5,
  },

  outOfStockContainer: {
    position: "relative",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    top: "210px",
  },

  outOfStockText: {
    color: "#8D8F9A",
    fontFamily: "Raleway, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    position: "absolute",
  },

  productImage: {
    width: "100%",
    height: "338px",
    objectFit: "contain",
    objectPosition: "center",
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
