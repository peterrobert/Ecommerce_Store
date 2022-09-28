import React, { Component, Fragment } from "react";
import CartColorButton from "../components/CartColorButton";
import CartSizeButton from "../components/CartSizeButton";
import ProductImageThumbnail from "../components/ProductImageThumbnail";
import AppButton from "../components/AppButton";

import product from "../images/trouser.jpeg";
import "../styles/ProductDisplayPage.css";

const dummyData = [
  { image: product, id: 1 },
  { image: product, id: 2 },
  { image: product, id: 3 },
];

export default class ProductDisplayPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: dummyData,
    });
  }

  displayThumbnails = () => {
    let results = this.state.products.map((value) => {
      return (
        <Fragment key={value.id}>
          <ProductImageThumbnail imageThumbnail={value.image} />
        </Fragment>
      );
    });
    return results;
  };

  render() {
    return (
      <div className="product-display-container">
        <div className="thumbnails-display">{this.displayThumbnails()}</div>
        <div className="main-image-display">
          <img src={product} alt="main" />
        </div>
        <div className="main-content-display">
          <div className="card-info">
            <h2>Apollo</h2>
            <h1>Running short</h1>
            <div className="cart-size-button-container">
              <h4>SIZE:</h4>
              <div>
                <CartSizeButton sizeValue="xl" />
                <CartSizeButton sizeValue="s" />
                <CartSizeButton sizeValue="M" />
                <CartSizeButton sizeValue="l" />
              </div>
            </div>

            <div className="cart-size-button-container">
              <h4>COLOR:</h4>
              <div>
                <CartColorButton color="#D3D2D5" />
                <CartColorButton color="#2B2B2B" />
                <CartColorButton color="#0F6450" />
              </div>
            </div>

            <div className="cart-size-button-container">
              <h4>PRICE:</h4>
              <h3 className="product-display-price">$50.00</h3>
              <AppButton appText="Add to cart" color="#5ECE7B" />
              {/* <p className="product-description">
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses and party dresses from
                all your favorite brands.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
