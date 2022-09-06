import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

import trouser from "../images/trouser.jpeg";
import shirt from "../images/shirt.jpeg";

const images = [{ url: trouser }, { url: shirt }];

export default class ImageSlider extends Component {
  render() {
    return (
      <div className="app-slider">
        <SimpleImageSlider
          width={200}
          height={288}
          images={images}
          showBullets={false}
          showNavs={true}
        />
      </div>
    );
  }
}
