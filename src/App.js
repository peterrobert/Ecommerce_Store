import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import "./styles/App.css";
import AppNavigation from "./components/AppNavigation";
import TabContext from "./context/tabContext";
import CurrencyContext from "./context/currencyContext";

export default class App extends Component {
  // <=== MAIN CONTEXT OBJECT ====>
  constructor(props) {
    super(props);
    this.state = {
      tab: "all",
      currency: [],
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
  
  render() {
    return (
      <>
       <CurrencyContext.Provider
            value={{
              appGlobalCurrency: this.state.currency,
              handleCurrencySelection: this.handleCurrencySelection,
            }}
          >
        <TabContext.Provider
          value={{
            tabSelection: this.state,
            handleTabSelection: this.handleTabSelection,
            appGlobalCurrency: this.state.currency,
            handleCurrencySelection: this.handleCurrencySelection,
          }}
        >
         
            <AppNavigation />
            <Routes>
              <Route path="/" element={<CategoryPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            </TabContext.Provider>
          </CurrencyContext.Provider>
      
      </>
    );
  }
}
