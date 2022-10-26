import React, { Component } from "react";

export default class AppCurrencies extends Component {
  displayCurrency = () => {
    const { currency, changeCurrency } = this.props;
    const results = currency.map((value, idx) => {
      return (
        <li
          style={styles.listItem}
          key={idx}
          className="currency-list-item"
          onClick={() => {
            let result = {
              label: value.label,
              symbol: value.symbol,
            };
            changeCurrency(result);
          }}
        >
          <span>{value.symbol}</span> <span>{value.label}</span>
        </li>
      );
    });

    return results;
  };
  render() {
    return (
      <div style={styles.container}>
        <ul style={styles.listContainer}>{this.displayCurrency()}</ul>
      </div>
    );
  }
}

const styles = {
  container: {
    position: "absolute",
    marginLeft: " -50px",
    background: "#FFFFFF",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 500,
    color: "#1D1F22",
    width: "114px",
    boxShadow: "0px 4px 35px rgb(168 172 176 / 19)",
    zIndex: 1,
   
  },
  listContainer: {
    listStyleType: "none",
  },
  listItem: {
    marginLeft: "-28px",
    padding: "10px",
  },
};
