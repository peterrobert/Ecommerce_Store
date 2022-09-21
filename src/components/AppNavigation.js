import React, { Component, Fragment } from "react";

import logo from "../images/Group.png";
import dollar from "../images/$.png";
import dropdown from "../images/dropdown.png";
import cart from "../images/cart.png";
import getAllCategories from "../services/categoriesService";
import TabContext from "../context/tabContext";

export default class AppNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appCategories: [],
      appCurrencies: [],
      tabSelection: "",
    };
  }

  componentDidMount() {
    this.displayCategories();
    this.setState({
      ...this.state,
      tabSelection: this.context.tabSelection.tab,
    });
  }

  // <==== DISPLAY THE CATEGORIES ====>
  displayCategories = async () => {
    try {
      const { categories, currencies } = await getAllCategories();
      this.setState({
        appCategories: categories,
        appCurrencies: currencies
      });
    } catch (error) {
      console.log("something went wrong");
    }
  };

  // <==== HANDLE CLICK ====>
  handleClick = (value) => {
    this.setState({
      ...this.state,
      tabSelection: value.name,
    })
    this.context.handleTabSelection(value.name)
  };

  render() {
    console.log(this.state.appCurrencies)
    const activeTabStyles = {
      color: "#5ECE7B",
      fontFamily: "Raleway",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "22px",
      borderBottom: "2px solid",
    };

    return (
      <div
        className="app-navigation-container"
        style={styles.navigationContainer}
      >
        <div className="app-category-links" style={styles.appCategoryLinks}>
          <ul style={styles.appLinks}>
            {this.state.appCategories &&
              this.state.appCategories.map((value, idx) => {
                return (
                  <Fragment key={idx}>
                    <li
                      onClick={() => this.handleClick(value)}
                      style={
                        this.state.tabSelection === value.name
                          ? activeTabStyles
                          : null
                      }
                    >
                      {value.name}
                    </li>
                  </Fragment>
                );
              })}
          </ul>
        </div>

        <div className="app-logo" style={styles.appLogo}>
          <img src={logo} alt="app logo" />
        </div>

        <div className="app-cart-button" style={styles.appCartButton}>
          <div className="currency-drop-down">
            <img src={dollar} alt="currency" className="dollar-image" />
            <button>
              <img
                src={dropdown}
                alt="Currency button"
                className="drop-down-image"
              />
            </button>
          </div>
          <div className="cart-button-container">
            <button>
              <img src={cart} alt="cart button" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// <==== SET THE CONTEXT TYPES ====>

AppNavigation.contextType = TabContext;

// <==== NAVIGATION REUSABLE COMPONENT STYLES ====>
const styles = {
  navigationContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "no-wrap",
  },

  appCategoryLinks: {
    flex: 1,
  },
  appLinks: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
  },
  appLogo: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  appCartButton: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
    position: "relative",
    right: "50px",
  },
};
