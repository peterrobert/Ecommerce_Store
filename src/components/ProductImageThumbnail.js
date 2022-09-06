import React, { Component } from "react";

export default class ProductImageThumbnail extends Component {
  render() {
    const { changeImageDisplay, imageThumbnail } = this.props;
    return (
      <button style={styles.btnContainer} onClick={() => changeImageDisplay()}>
        <img
          src={imageThumbnail}
          alt="shirt-thumb"
          style={styles.imageContainer}
        />
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
