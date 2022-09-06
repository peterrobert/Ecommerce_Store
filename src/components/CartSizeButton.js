import React, { Component } from "react";

export default class CartSizeButton extends Component {
  render() {
    const { saveSize, sizeValue } = this.props;

    return (
      <button style={styles.buttonContainer} onClick={() => saveSize()}>
        {sizeValue}
      </button>
    );
  }
}

const styles = {
  buttonContainer: {
    width: "63px",
    height: "45px",
    background: "#FFFFFF",
    border: "1px solid #1D1F22",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    marginRight: "15px",
    cursor: "pointer"
  },
};
