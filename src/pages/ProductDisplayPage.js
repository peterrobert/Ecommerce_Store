import React, { Component, Fragment} from "react";
import CartColorButton from "../components/CartColorButton";
import CartSizeButton from "../components/CartSizeButton";
import AppButton from "../components/AppButton";
import ProductImageThumbnail from "../components/ProductImageThumbnail"
import { useParams } from "react-router-dom";
import "../styles/ProductDisplayPage.css";
import { getSingleProduct } from "../services/productService";
import _ from "lodash";

class ProductDisplayPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      mainImage: ""
    };
  }

  componentDidMount() {
    this.getProduct();
  }


  getProduct = async () => {
    const { id } = this.props.params;
    try {
      const response = await getSingleProduct(id);
    
      console.log(response)

      this.setState({
        product: response,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  displayThumbnails = () => {
    const {product} = this.state
    if(!_.isEmpty(product)){
      this.setState({
        ...this.state,
        mainImage: product.gallery[0]
      })
      let results = product.gallery.map((value, idx) => {
        
        return (
          <Fragment key={idx}>
            <ProductImageThumbnail imageThumbnail = {value}/>
          </Fragment>
        );
      });
      return results;
    }
  
  };

  render() {
    const { mainImage} = this.state
    return (
      <div className="product-display-container">
        <div className="thumbnails-display">{this.displayThumbnails()}</div>
        <div className="main-image-display">
          <img src={mainImage} alt="main" />
        </div>
        <div className="main-content-display">
          <div className="card-info">
            <h2>Apollo</h2>
            <h1>Running short</h1>
            <div className="cart-size-button-container">
              <h4>SIZE:</h4>
              <div>
                <CartSizeButton sizeValue="xl" />
                <CartSizeButton sizeValue="s" />
                <CartSizeButton sizeValue="M" />
                <CartSizeButton sizeValue="l" />
              </div>
            </div>

            <div className="cart-size-button-container">
              <h4>COLOR:</h4>
              <div>
                <CartColorButton color="#D3D2D5" />
                <CartColorButton color="#2B2B2B" />
                <CartColorButton color="#0F6450" />
              </div>
            </div>

            <div className="cart-size-button-container">
              <h4>PRICE:</h4>
              <h3 className="product-display-price">$50.00</h3>
              <AppButton appText="Add to cart" color="#5ECE7B" />
              <p className="product-description">
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses and party dresses from
                all your favorite brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function AppProductDisplayNavigate(props) {
  let params = useParams();
  return <ProductDisplayPage {...props} params={params} />;
}

export default AppProductDisplayNavigate;
