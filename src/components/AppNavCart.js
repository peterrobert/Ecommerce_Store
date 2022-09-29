import React, { Component, Fragment } from "react";
import { useNavigate } from 'react-router-dom';

import CartProductCard from "./CartProductCard";
import AppButton from "./AppButton";
import _ from "lodash";
import CartContext from "../context/cartContext";

class AppNavCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prices: [],
      totalPrice: null,
    };
  }

  totalPriceCalculation = (initialProductPrice, calculatedPrice) => {
    if (calculatedPrice === null) {

      this.setState({
        ...this.state,
        prices: [initialProductPrice],
      });
      
      const sum = this.state.prices.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);

      this.setState({ ...this.state, totalPrice: sum });

      return;
    }
  };

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

  redirectToCart = () => {
    this.props.navigate('/cart');
  };

  render() {
    const { products } = this.props;
    return (
      <div style={styles.container} className="nav-cart-container">
        <div style={styles.numberOfItems}>
          <span style={styles.statementHeader}>My Bag, </span>{" "}
          <span>{products.length} items </span>
        </div>
        {this.displayItems()}

        <div>
          <div style={styles.footerContainer}>
            <div style={styles.totalTitle}>Total</div>
            <div style={styles.totalNumber}>{this.state.totalPrice}</div>
          </div>
          <div style={styles.footerContainer}>
            <AppButton appText="View Bag" handleClick={this.redirectToCart} />
            <AppButton appText="Check out" color="#5ECE7B" />
          </div>
        </div>
      </div>
    );
  }
}

function AppNavCartNavigate(props) {
  let navigate = useNavigate();
  return <AppNavCart {...props} navigate={navigate} />
}

export default AppNavCartNavigate;

AppNavCart.contextType = CartContext;

const styles = {
  container: {
    position: "absolute",
    right: "-40px",
    background: "#fff",
    zIndex: 1,
    boxShadow: "0px 4px 35px rgb(168 172 176 / 19)",
  },

  numberOfItems: {
    fontFamily: "Raleway",
    padding: "20px",
  },

  statementHeader: {
    fontWeight: 700,
    fontSize: "16px",
  },
  footerContainer: {
    display: "flex",
    flexWrap: "no-wrap",
  },

  totalTitle: {
    flex: 1,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    marginLeft: "20px",
    marginTop: "20px",
  },

  totalNumber: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    marginRight: "20px",
    marginTop: "20px",
  },
};
