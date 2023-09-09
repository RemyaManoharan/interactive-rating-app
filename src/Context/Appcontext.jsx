import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ratedStar, setRatedStar] = useState(null);

  return (
    <AppContext.Provider
      value={{ isSubmitted, setIsSubmitted, ratedStar, setRatedStar }}
    >
      {children}
    </AppContext.Provider>
  );
};
