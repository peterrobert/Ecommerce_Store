import React, { Component, Fragment } from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import _ from "lodash";
// <==== components ====>
import ProductCard from "../components/ProductCard";
import TabContext from "../context/tabContext";
import getAllProducts from "../services/productService";
// <==== styles ====>
import "../styles/CategoryPage.css";

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchAllProducts();
  }

  // <==== Fetch product ====>
  fetchAllProducts = async () => {
    try {
      const { categories} = await getAllProducts();
      this.setState({
        ...this.state,
        categories: categories,
      });
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  // <==== Handle add to cart button on each product card ====>
  handleProductCart = (product) => {
    const {addToCart, appGlobalCart} = this.context;
    // <=== If the cart is empty ====> 
    if(_.isEmpty(appGlobalCart)) return  addToCart(product);
    // <==== If the cart doesnt include the item ====> 
    if(!_.isEmpty(appGlobalCart) && !_.includes(appGlobalCart, product)) return addToCart(product)
    // <=== However it means the cart already has that product so show notice.
    NotificationManager.warning('This product is already in the cart', 'Notice!', 3000);
  };

  displayProducts = () => {
    const filterProducts = (value) => {
      if (value.name === this.context.tabSelection.tab) return value;
    };
    const results = this.state.categories.filter(filterProducts);

    if (!_.isEmpty(results)) {
      let items = results[0].products.map((value) => {
        return (
          <Fragment key={value.id}>
            <ProductCard
              item={value}
              handleProductCart={this.handleProductCart}
            />
          </Fragment>
        );
      });
      return items;
    }
  };

  render() {
    return (
      <>
       <NotificationContainer/>
       <div className="category-page-container">
        <h1>{this.context.tabSelection.tab}</h1>
        <div className="category-product-container">
          {this.displayProducts()}
        </div>
      </div>
      </>
      
    );
  }
}

// <==== SET THE CONTEXT TYPES ====>
CategoryPage.contextType = TabContext;

export default CategoryPage;
