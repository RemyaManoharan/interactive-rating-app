import Header from "./Components/Header/Header";
import Rating from "./Components/Rating/Rating";
import { useState, useContext } from "react";
import Thankyou from "./Components/ThankYou/Thankyou";
import { AppContext, AppProvider } from "./Context/Appcontext";

function App() {
  const { isSubmitted } = useContext(AppContext);

  // const [ratedStar, setRatedStar] = useState(null);
  return (
    <div className="wrapper">
      <Header />
      {!isSubmitted && <Rating />}
      {isSubmitted && <Thankyou />}
    </div>
  );
}

export default App;
