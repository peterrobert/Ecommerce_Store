import React, { Component } from "react";

import shirt from "../images/shirt.jpeg";

export default class ProductImageThumbnail extends Component {
  render() {
    const { changeImageDisplay } = this.props;
    return (
      <button style={styles.btnContainer} onClick={() => changeImageDisplay()}>
        <img src={shirt} alt="shirt-thumb" style={styles.imageContainer} />
      </button>
    );
  }
}

const styles = {
  btnContainer: {
    background: "unset",
    border: "unset",
    marginTop: "10px",
    marginBottom: "10px",
    cursor: "pointer",
  },
  imageContainer: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  },
};
