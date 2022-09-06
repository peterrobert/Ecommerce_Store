import React, { Component, Fragment } from "react";
import AppButton from "../components/AppButton";
// <==== Components ====>
import CartProductCard from "../components/CartProductCard";
import product from "../images/trouser.jpeg";
// <==== Styles ====>
import "../styles/CartPage.css";

const dummyData = [
  { id: 1, name: "Apollo running shorts", price: "50$", image: product },
  { id: 2, name: "Apollo running shorts", price: "50$", image: product },
  { id: 3, name: "Apollo running shorts", price: "50$", image: product },
];

export default class CartPage extends Component {
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

  // <==== Display all the product cards ====>
  displayProducts = () => {
    let results = this.state.products.map((value) => {
      return (
        <Fragment key={value.id}>
          <CartProductCard />
        </Fragment>
      );
    });
    return results;
  };

  render() {
    return (
      <div className="cart-page-container">
        <h1 className="header-pg">Cart</h1>
        <div className="cart-product-container">{this.displayProducts()}</div>
        <footer className="cart-page-footer">
          <div className="border-line" />
          <div className="tax-value-container">
            <span className="tax-value">Tax 21% :</span>
            <span className="tax-calculation">$42.00</span>
          </div>
          <div className="tax-value-container">
            <span className="tax-value">Quantity :</span>
            <span className="tax-calculation">3</span>
          </div>
          <div className="tax-value-container">
            <span className="tax-value">Total :</span>
            <span className="tax-calculation">$ 200</span>
          </div>
          <AppButton appText="order" color="#5ECE7B" />
        </footer>
      </div>
    );
  }
}
