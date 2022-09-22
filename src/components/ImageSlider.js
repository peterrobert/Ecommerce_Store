import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default class ImageSlider extends Component {
  render() {
    const {gallery} = this.props
    return (
      <div className="app-slider">
        <SimpleImageSlider
          width={200}
          height={350}
          images={gallery}
          showBullets={false}
          showNavs={true}
          navStyle={2}
          navMargin={110}
          navSize={20}
        />
      </div>
    );
  }
}
