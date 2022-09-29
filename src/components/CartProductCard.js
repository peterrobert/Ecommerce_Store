import React, { Component, Fragment } from "react";
import CurrencyContext from "../context/currencyContext";
import CartColorButton from "./CartColorButton";
import CartSizeButton from "./CartSizeButton";
import ImageSlider from "./ImageSlider";

export default class CartProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      initialProductPrice: null,
      calculatedPrice: null,
    };
  }

  componentDidMount() {
    this.displayPrice();
  }

  displayPrice = () => {
    const { product } = this.props;
    const { appGlobalCurrency } = this.context;

    let results = product.prices.filter((value) => {
      if (value.currency.label === appGlobalCurrency.label) return value.amount;
    });

    this.setState({ ...this.state, initialProductPrice: results[0].amount });
  };

  handleIncreament = () => {
    let initialPrice = this.state.initialProductPrice;
    let multiplyProduct = initialPrice * (this.state.quantity + 1);

    this.setState({
      ...this.state,
      quantity: this.state.quantity + 1,
      calculatedPrice: multiplyProduct,
    });
  };

  handleDecrement = () => {
    let initialPrice = this.state.initialProductPrice;
    let multiplyProduct = initialPrice * Math.max(0, this.state.quantity - 1);

    this.setState({
      ...this.state,
      quantity: Math.max(0, this.state.quantity - 1),
      calculatedPrice: multiplyProduct,
    });
  };

  displayAttributes = () => {
    const { product } = this.props;
    // <==== Colors, sizes, etc ====>
    const mutateDisplayValue = (name, itemsArray) => {
      let results = itemsArray.map((value, idx) => {
        if (name === "Color")
          return (
            <Fragment key={idx}>
              <CartColorButton color={value.displayValue} />
            </Fragment>
          );
        return (
          <Fragment key={idx}>
            <CartSizeButton sizeValue={value.displayValue} />
          </Fragment>
        );
      });
      return results;
    };

    // <==== Attributes Main Container ====>
    let results = product.attributes.map((value) => {
      return (
        <div className="cart-size-button-container" key={value.id}>
          <h4>{value.name}:</h4>
          <div style={styles.cartSizeButtonContainer}>
            {mutateDisplayValue(value.name, value.items)}
          </div>
        </div>
      );
    });

    return results;
  };

  render() {
    const { product } = this.props;
    const { appGlobalCurrency } = this.context;

    return (
      <div
        className="cart-product-container"
        style={styles.cartProductContainer}
      >
        <div className="border-line" style={styles.borderLine} />
        <div className="card-container" style={styles.cardContainer}>
          <div className="card-info" style={styles.cardInfo}>
            <h2>{product.name}</h2>
            <h1>{product.brand}</h1>
            <h3>
              {appGlobalCurrency.symbol}{" "}
              {this.state.calculatedPrice === null
                ? this.state.initialProductPrice
                : this.state.calculatedPrice}
            </h3>

            {this.displayAttributes()}
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
                <CartSizeButton
                  sizeValue="+"
                  saveSize={this.handleIncreament}
                />
              </div>
              <div style={styles.incrementValue}>
                <h1 className="incrementing-value">{this.state.quantity}</h1>
              </div>
              <div style={styles.decrementButton}>
                <CartSizeButton sizeValue="-" saveSize={this.handleDecrement} />
              </div>
            </div>

            <div className="slider-container" style={styles.sliderContainer}>
              <ImageSlider gallery={product.gallery} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// <==== SET THE CONTEXT TYPES ====>
CartProductCard.contextType = CurrencyContext;

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
