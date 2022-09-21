import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import CartProductCard from "./CartProductCard";
import AppButton from "./AppButton";
import _ from "lodash";

class AppNavCart extends Component {
  displayItems = () => {
    const { products } = this.props;
    if (!_.isEmpty(products)) {
      let results = products.map((product) => {
        return (
          <Fragment key={product.id}>
            <CartProductCard product={product} />
          </Fragment>
        );
      });
      return results;
    }
  };
  render() {
    const { products } = this.props;
    return (
      <div style={styles.container} className="nav-cart-container">
        <div style={styles.numberOfItems}>
          <span style={styles.statementHeader}>My Bag, </span>{" "}
          <span>{products.length} items </span>
        </div>
        {this.displayItems()}

        <div>
          <div style={styles.footerContainer}>
            <div style={styles.totalTitle}>Total</div>
            <div style={styles.totalNumber}>$200</div>
          </div>
          <div style={styles.footerContainer}>
            <AppButton appText="View Bag" handleClick ={() => this.props.history.push("/cart")} />
            <AppButton appText="Check out" color="#5ECE7B" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AppNavCart);

const styles = {
  container: {
    position: "absolute",
    right: "-40px",
    background: "#fff",
    zIndex: 1,
    boxShadow: "0px 4px 35px rgb(168 172 176 / 19)",
  },

  numberOfItems: {
    fontFamily: "Raleway",
    padding: "20px",
  },

  statementHeader: {
    fontWeight: 700,
    fontSize: "16px",
  },
  footerContainer: {
    display: "flex",
    flexWrap: "no-wrap",
  },

  totalTitle: {
    flex: 1,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    marginLeft: "20px",
    marginTop: "20px",
  },

  totalNumber: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    marginRight: "20px",
    marginTop: "20px",
  },
};
