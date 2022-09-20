import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';

import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage"
import "./styles/App.css";

export default class App extends Component {

  render() {
    return (
      <>
      <Routes>
        <Route path='/' element={<CategoryPage/>}  />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      </>
    )
  }
}


