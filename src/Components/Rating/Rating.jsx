import React, { useContext, useState } from "react";
import star from "../../images/icon-star.svg";
import "./Rating.css";
import Thankyou from "../ThankYou/Thankyou";
import { AppContext } from "../../Context/Appcontext";

function Rating() {
  const { setIsSubmitted, setRatedStar } = useContext(AppContext);

  const Button = ({ number }) => {
    return (
      <button
        onClick={() => setRatedStar(number)}
        className="btn-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 "
      >
        {number}
      </button>
    );
  };

  const buttonNumbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <ul className="grid grid-cols-5 gap-3 mb-10">
        {buttonNumbers.map((number) => (
          <li key={number}>
            <Button number={number} />
          </li>
        ))}
      </ul>
      <div className="text-center">
        <button
          onClick={() => setIsSubmitted(true)}
          className="btn-submit w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Rating;
