import React, { Component } from "react";

export default class AppButton extends Component {
  render() {
    const { appText, color } = this.props;

    const styles = {
      buttonContainer: {
        backgroundColor: color ? color : "transparent",
        width: "280px",
        height: "48px",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 32px",
        display: "flex",
        border: "unset",
        color: "#fff",
        textTransform: "uppercase",
        marginTop: "20px",
        marginBottom: "20px",
        fontFamily: "raleway",
        fontWeight: "600",
        cursor: "pointer",
      },
    };

    return <button style={styles.buttonContainer}>{appText}</button>;
  }
}
