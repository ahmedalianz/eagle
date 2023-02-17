import React from "react";
import Fade from "react-reveal/Fade";
import ImageZoom from "react-medium-image-zoom";

const GalleryItem = ({ source }) => {
  return (
    <figure className="gallery__item">
      <div className="gallery__item-container">
        <Fade>
          <ImageZoom>
            <img alt="Gallery" src={source} className="gallery__img" />
          </ImageZoom>
        </Fade>
      </div>
    </figure>
  );
};

export default GalleryItem;
