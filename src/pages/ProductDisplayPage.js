import React, { Component, Fragment } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useParams } from "react-router-dom";

import CartColorButton from "../components/CartColorButton";
import CartSizeButton from "../components/CartSizeButton";
import AppButton from "../components/AppButton";
import ProductImageThumbnail from "../components/ProductImageThumbnail";
import "../styles/ProductDisplayPage.css";
import CurrencyContext from "../context/currencyContext";

import { getSingleProduct } from "../services/productService";
import _ from "lodash";
import parse from "html-react-parser";

class ProductDisplayPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      mainImage: "",
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  displayPrice = () => {
    if (!_.isEmpty(this.state.product)) {
      const { prices } = this.state.product;
      const { appGlobalCurrency } = this.context;

      let results = prices.filter((value) => {
        if (value.currency.label === appGlobalCurrency.label)
          return value.amount;
      });

      return results[0].amount;
    }
  };

  getProduct = async () => {
    const { id } = this.props.params;
    try {
      const response = await getSingleProduct(id);

      this.setState({
        product: response,
        mainImage: response.gallery[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  changeImageThumbnail = (image) => {
    this.setState({
      ...this.state,
      mainImage: image,
    });
  };

  displayAttributes = () => {
    const { product } = this.state;
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
    let results = product.attributes.map((value, idx) => {
      return (
        <div className="cart-size-button-container" key={idx}>
          <h4>{value.name}:</h4>
          <div style={styles.cartSizeButtonContainer}>
            {mutateDisplayValue(value.name, value.items)}
          </div>
        </div>
      );
    });

    return results;
  };

  displayThumbnails = () => {
    const { product } = this.state;
    if (!_.isEmpty(product)) {
      let results = product.gallery.map((value, idx) => {
        return (
          <Fragment key={idx}>
            <ProductImageThumbnail
              imageThumbnail={value}
              changeImageDisplay={this.changeImageThumbnail}
            />
          </Fragment>
        );
      });
      return results;
    }
  };

  // <==== Handle add to cart button on each product card ====>
  handleProductCart = (product) => {
    const { addToCart, cart } = this.context;
    // <=== If the cart is empty ====>
    if (_.isEmpty(cart)) return addToCart(product);
    // <==== If the cart doesnt include the item ====>
    if (!_.isEmpty(cart) && !_.includes(cart, product))
      return addToCart(product);
    // <=== However it means the cart already has that product so show notice.
    NotificationManager.warning(
      "This product is already in the cart",
      "Notice!",
      3000
    );
  };

  render() {
    const { mainImage, product } = this.state;
    const { appGlobalCurrency } = this.context;

    if (!_.isEmpty(product)) {
      return (
        <>
          <NotificationContainer />
          <div className="product-display-container">
            <div className="thumbnails-display">{this.displayThumbnails()}</div>
            <div className="main-image-display">
              <img src={mainImage} alt="main" />
            </div>
            <div className="main-content-display">
              <div className="card-info">
                <h2>{product.name}</h2>
                <h1>{product.category}</h1>
                {this.displayAttributes()}
                <div className="cart-size-button-container">
                  <h4>PRICE:</h4>
                  <h3 className="product-display-price">
                    {appGlobalCurrency.symbol}
                    {this.displayPrice()}
                  </h3>
                  <AppButton
                    appText="Add to cart"
                    color="#5ECE7B"
                    handleClick={() => this.handleProductCart(product)}
                  />
                  <div
                    className="product-description"
                    style={styles.productDescription}
                  >
                    {parse(product.description)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

function AppProductDisplayNavigate(props) {
  let params = useParams();
  return <ProductDisplayPage {...props} params={params} />;
}

ProductDisplayPage.contextType = CurrencyContext;

// <=== STYLES ===>

const styles = {
  cartSizeButtonContainer: {
    display: "flex",
    flexWrap: "nowrap",
  },
  productDescription: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400px",
    fontSize: "20px",
    color: "#1D1F22",
  },
};

export default AppProductDisplayNavigate;
