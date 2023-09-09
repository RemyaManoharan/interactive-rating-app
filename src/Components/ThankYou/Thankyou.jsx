import React, { useContext } from "react";
import thanks from "../../images/illustration-thank-you.svg";
import { AppContext } from "../../Context/Appcontext";

function Thankyou() {
  const { setIsSubmitted, ratedStar } = useContext(AppContext);
  return (
    <div className="wrapper">
      <img src={thanks} alt="thanks-img" className="block mx-auto mb-10" />
      <p className="p-rating">You selected {ratedStar} out of 5</p>
      <h2 className="title text-center">Thank You!</h2>
      <p className="text-gray-400 mb-10 text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <div className="text-center">
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-submit w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full"
        >
          rate again
        </button>
      </div>
    </div>
  );
}

export default Thankyou;
