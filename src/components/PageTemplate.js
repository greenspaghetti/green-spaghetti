import React from "react";
import "../styles/pg-style/pages.css";




function PageTemplate({ title, children }) {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <h1>{title}</h1>
        {children}
        <div className="page-placeholder">
  <img
     src={`https://picsum.photos/800/500?grayscale&random=${title.length * 42}`}
  alt={`${title} placeholder`}
  />
</div>

      </div>
    </div>
  );
}

export default PageTemplate;
