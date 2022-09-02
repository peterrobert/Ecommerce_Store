import React, { Component } from 'react'
import product from "../images/trouser.jpeg";
import cart from "../images/Common.png";

export default class ProductCard extends Component {
  render() {
    return (
        <div className='product-card-container' style={styles.productContainer}>
         <img src={product} alt='product-one' style={styles.productImage} />
         <h2 style={styles.productName}>Apollo running shorts</h2>
         <h2 style={styles.productPrice}>50$</h2>
         <div className='card-cart-button' onClick={() => this.props.handleProductCart()}> 
             <img src={cart} alt='cart-button'/>
         </div>
        </div>
       )
  }
}

// ==== PRODUCT CARD REUSABLE COMPONENT STYLES ====

const styles = {
    productContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        background:"#FFFFFF",
        height:"420px",
        flexWrap: "nowrap",
        maxWidth: "386px",
    },
    productImage: {
        width: "100%",
        height: "338px",
        objectFit: "cover",
        objectPosition: "80% 100%"
    },
    productName: {
        fontWeight: "200"
    },
    productPrice: {
        fontWeight: 500,
        fontSize: "18px",
        marginTop: "-10px"
    }
}
