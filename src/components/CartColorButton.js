import React, { Component } from 'react'

export default class CartColorButton extends Component {
  render() {
    const {selectColor, color} = this.props

    const styles = {
        buttonContainer: {
          width: "32px",
          height: "32px",
          backgroundColor: color,
          fontFamily: "Source Sans Pro",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "22px",
          marginRight: "15px",
          cursor: "pointer",
          border: "unset"
        }
    }

    return (
        <button style={styles.buttonContainer} onClick={() => selectColor()} />
    )
  }
}


