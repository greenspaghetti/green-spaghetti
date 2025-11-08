import React from "react";
import "../styles/pg-style/pages.css";

import breakfast from "../assets/pages/breakfast.jpg";
import appetizers from "../assets/pages/appetizers.jpg";
import mains from "../assets/pages/mains.jpg";
import soupsSalads from "../assets/pages/soups-salads.jpg";
import desserts from "../assets/pages/desserts.jpg";
import drinksAlcohol from "../assets/pages/drinks.jpg";
import pantrySauces from "../assets/pages/pantry.jpg";

const pageImages = {
  Breakfast: breakfast,
  Appetizers: appetizers,
  Mains: mains,
  Soups: soupsSalads,
  Desserts: desserts,
  Drinks: drinksAlcohol,
  Pantry: pantrySauces,
};

const displayTitles = {
  Breakfast: "Breakfast",
  Appetizers: "Appetizers",
  Mains: "Mains",
  Soups: "Soups & Salads",
  Desserts: "Desserts",
  Drinks: "Drinks & Alcohol",
  Pantry: "Pantry & Sauces",
};

function PageTemplate({ title, children }) {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1>{displayTitles[title] || title}</h1>
        {children}
        <img
          src={pageImages[title]}
          alt={`${displayTitles[title] || title} visual`}
          className="page-image"
        />
      </div>
    </div>
  );
}

export default PageTemplate;
