import React, { Component } from 'react'
import logo from "../images/Group.png";
import dollar from "../images/$.png";
import dropdown from "../images/dropdown.png";
import cart from "../images/cart.png";

export default class AppNavigation extends Component {
  render() {
    return (
        <div className='app-navigation-container' style={styles.navigationContainer}>
        <div className='app-category-links' style={styles.appCategoryLinks}>
         <ul style={styles.appLinks}>
             <li>women</li>
             <li>men</li>
             <li>children</li>
         </ul>
        </div>
 
        <div className='app-logo' style={styles.appLogo}>
          <img src={logo}  alt="app logo" />
        </div>
 
        <div className='app-cart-button' style={styles.appCartButton}>
         <div className='currency-drop-down'>
            <img src={dollar} alt="currency" className='dollar-image'/>
            <button>
             <img src={dropdown}  alt="Currency button" className='drop-down-image'/>
            </button>
         </div>
         <div className='cart-button-container'>
             <button>
               <img src={cart} alt="cart button"/>
             </button>
         </div>
        </div>
     </div>
    )
  }
}

// <==== NAVIGATION REUSABLE COMPONENT STYLES ====>
const styles = {
    navigationContainer: {
       width: "100%",
       display: "flex",
       flexWrap: "no-wrap" 
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
       justifyContent: "center"
    },
    appCartButton: {
        display: "flex",
        justifyContent:"flex-end",
        flex: 1,
        position: "relative",
        right: "50px"
    }
    
}