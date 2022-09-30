import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import CategoryPage from "./pages/CategoryPage";
import ProductDisplayPage from "./pages/ProductDisplayPage";
import CartPage from "./pages/CartPage";
import "./styles/App.css";
import AppNavigation from "./components/AppNavigation";
import TabContext from "./context/tabContext";
import CurrencyContext from "./context/currencyContext";
import CartContext from "./context/cartContext";
import _ from "lodash";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "all",
      currency: [],
      cart: [],
    };
  }

  // <=== FOR CHANGING THE TABS AND SORTING THE PRODUCT ===>
  handleTabSelection = (selection) => {
    this.setState({ tab: selection });
  };

  // <==== FOR CHANGING THE CURRENCY ALL THROUGH THE APPLICATION ====>
  handleCurrencySelection = (selection) => {
    this.setState({ ...this.state, currency: selection });
  };

  // <==== FOR ADDING PRODUCTS INTO THE CART ====>
  handleAddToCart = (selection) => {
    this.setState({ ...this.state, cart: [...this.state.cart, selection] });
  };


  render() {
    return (
      <>
        <CartContext.Provider
          value={{
            cart: this.state.cart,
            addToCart: this.handleAddToCart,
          }}
        >
          <CurrencyContext.Provider
            value={{
              appGlobalCurrency: this.state.currency,
              handleCurrencySelection: this.handleCurrencySelection,
              addToCart: this.handleAddToCart,
              cart: this.state.cart,
            }}
          >
            <TabContext.Provider
              value={{
                tabSelection: this.state,
                handleTabSelection: this.handleTabSelection,
                appGlobalCurrency: this.state.currency,
                handleCurrencySelection: this.handleCurrencySelection,
                addToCart: this.handleAddToCart,
                appGlobalCart: this.state.cart,
              }}
            >
              <AppNavigation />
              <Routes>
                <Route path="/" element={<CategoryPage />} />
                <Route path="/products/:id" element={<ProductDisplayPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </TabContext.Provider>
          </CurrencyContext.Provider>
        </CartContext.Provider>
      </>
    );
  }
}
