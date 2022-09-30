import React, { Component } from "react";

export default class AppButton extends Component {
  render() {
    const { appText, color, handleClick } = this.props;

    const styles = {
      buttonContainer: {
        backgroundColor: color ? color : "transparent",
        width: "100%",
        height: "48px",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 32px",
        display: "flex",
        border: color ? "unset" : "#000 1px solid",
        color: color ? "#fff" : "#000",
        textTransform: "uppercase",
        marginTop: "20px",
        marginBottom: "20px",
        fontFamily: "raleway",
        fontWeight: "600",
        cursor: "pointer",
      },
    };

    return <button style={styles.buttonContainer} onClick={() => handleClick()}>{appText}</button>;
  }
}
