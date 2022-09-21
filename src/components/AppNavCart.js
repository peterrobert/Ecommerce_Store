import React, { Component } from "react";
import CartProductCard from "./CartProductCard";

export default class AppNavCart extends Component {
  render() {
    return (
      <div style={styles.container}>
        <CartProductCard />
      </div>
    );
  }
}

const styles = {
  container: {
    width: "325px",
  },
};
