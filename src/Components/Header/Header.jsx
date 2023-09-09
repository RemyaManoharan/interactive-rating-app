import React from "react";
import star from "../../images/icon-star.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={star} alt="star-img" className="bg-gray-700 p-2 rounded-full" />
      <h2 className="title">How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
}

export default Header;
