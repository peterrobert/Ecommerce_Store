import React, { Component, Fragment } from "react";
import AppButton from "../components/AppButton";
// <==== Components ====>
import CartProductCard from "../components/CartProductCard";
import CartContext from "../context/cartContext";
// <==== Styles ====>
import "../styles/CartPage.css";
import _ from "lodash";


export default class CartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prices: [],
      totalPrice: null,
    };
  }

  totalPriceCalculation = (initialProductPrice, calculatedPrice) => {
    if (calculatedPrice === null) {
      console.log(initialProductPrice);

      this.setState({
        ...this.state,
        prices: [initialProductPrice],
      });

      console.log(this.state);

      const sum = this.state.prices.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);

      this.setState({ ...this.state, totalPrice: sum });

      return;
    }
  };


  // <==== Display all the product cards ====>
  displayItems = () => {
    const { cart } = this.context;
    if (!_.isEmpty(cart)) {
      let results = cart.map((product) => {
        return (
          <Fragment key={product.id}>
            <CartProductCard
              product={product}
              calulateTotal={this.totalPriceCalculation}
            />
          </Fragment>
        );
      });
      return results;
    }
  };

  render() {
    return (
      <div className="cart-page-container">
        <h1 className="header-pg">Cart</h1>
        <div className="cart-product-container">{this.displayItems()}</div>
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

CartPage.contextType = CartContext;
