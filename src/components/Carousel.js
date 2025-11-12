import React from "react";
import "../styles/comp-style/carousel.css";

const Carousel = ({ items }) => {
  return (
    <div className="carousel-container">
      {items.map((item, index) => (
        <div className="carousel-item" key={index}>
          <img
            src={item.base}
            alt={item.alt || `carousel-item-${index}`}
            className="carousel-base"
          />
          {item.overlay && (
            <img
              src={item.overlay}
              alt={`${item.alt}-overlay`}
              className="carousel-overlay"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
