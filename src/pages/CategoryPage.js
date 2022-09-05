import React, { Component, Fragment } from "react";
// ==== components ====
import ProductCard from "../components/ProductCard";
import product from "../images/trouser.jpeg";
// ==== styles ====
import "../styles/CategoryPage.css";

const dummyData = [
  { id: 1, name: "Apollo running shorts", price: "50$", image: product },
  { id: 2, name: "Apollo running shorts", price: "50$", image: product },
  { id: 3, name: "Apollo running shorts", price: "50$", image: product },
  { id: 4, name: "Apollo running shorts", price: "50$", image: product },
  { id: 5, name: "Apollo running shorts", price: "50$", image: product },
  { id: 6, name: "Apollo running shorts", price: "50$", image: product },
  { id: 7, name: "Apollo running shorts", price: "50$", image: product },
];

class CategoryPage extends Component {
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
  // <==== Handle add to cart button on each product card ====>

  handleProductCart = () => {
    console.log("clicked");
  };

  // <==== Display all the product cards ====>
  displayProducts = () => {
    let results = this.state.products.map((value) => {
      return (
        <Fragment key={value.id}>
          <ProductCard item={value} handleProductCart={this.handleProductCart} />
        </Fragment>
      );
    });
    return results;
  };

  render() {
    return (
      <div className="category-page-container">
        <h1>Women</h1>
        <div className="category-product-container">
        {this.displayProducts()}
        </div>

        </div>
    );
  }
}

export default CategoryPage;
