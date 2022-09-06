import React, { Component, Fragment } from "react";
import ProductImageThumbnail from "../components/ProductImageThumbnail";

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
        <div className="main-content-display"></div>
      </div>
    );
  }
}
