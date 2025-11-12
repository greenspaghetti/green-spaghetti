import React from "react";
import PageTemplate from "../components/PageTemplate";
import breakfastImg from "../assets/pages/breakfast.jpg";
import "../styles/pg-style/pages.css";

function Breakfast() {
  return (
    <PageTemplate title="Breakfast" image={breakfastImg}>
      <p>
        A cozy spread of morning favorites — eggs benedict, waffles, and more.
        This page will feature the carousel test with the countertop background.
      </p>
    </PageTemplate>
  );
}

export default Breakfast;
