import React from "react";
import "../styles/footer.css";

const Footer2 = ({ date, article }) => {
  return (
    <div className="footermargin">
      <div className="news2">
        <div className="date">
          <p>{date}</p>
        </div>
        <div className="article">
          <p>{article}</p>
        </div>
      </div>
    </div>
  );
};
export default Footer2;
