import React from "react";
import "../styles/pg-style/home.css"; // reuse same dark style for now



function PageTemplate({ title, children }) {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default PageTemplate;
