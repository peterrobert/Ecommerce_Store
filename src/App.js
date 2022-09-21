import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import "./styles/App.css";
import AppNavigation from "./components/AppNavigation";
import TabContext from "./context/tabContext";

export default class App extends Component {
  // <=== MAIN CONTEXT OBJECT ====>
  constructor(props) {
    super(props);

    this.state = {
       tab: "all",
    };
  }

  handleTabSelection = (selection) => {
    this.setState({ tab: selection });
  };

  render() {
    return (
      <>
        <TabContext.Provider
          value={{
            tabSelection: this.state,
            handleTabSelection: this.handleTabSelection,
          }}
        >
          <AppNavigation />
          <Routes>
            <Route path="/" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </TabContext.Provider>
      </>
    );
  }
}
