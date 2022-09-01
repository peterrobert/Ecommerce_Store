import React from 'react'
import product from "../images/trouser.jpeg";

const ProductCard = () => {
  return (
   <div className='product-card-container' style={styles.productContainer}>
    <img src={product} alt='product-one' style={styles.productImage} />
    <h2 style={styles.productName}>Apollo running shorts</h2>
    <h2 style={styles.productPrice}>50$</h2>

   </div>
  )
}

const styles = {
    productContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        background:"#FFFFFF",
        height: "444px",
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

export default ProductCard