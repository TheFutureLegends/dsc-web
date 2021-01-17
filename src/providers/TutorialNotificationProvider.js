import React, { useContext, useEffect, useState } from "react";
import { TutorialNotificationContext } from "../contexts/index.js";

export const useToastify = () => {
  return useContext(TutorialNotificationContext);
};

export const Consumer = TutorialNotificationContext.Consumer;

export const TutorialNotificationProvider = ({ children, props }) => {
  const [isLoading, setIsLoading] = useState(false);

  const notification = () => {
    if (isLoading) {
      alert("SUCCESS");

      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {};
  }, [isLoading]);

  const value = {
    notification,
    isLoading,
    setIsLoading,
  };

  return (
    <TutorialNotificationContext.Provider value={value} {...props}>
      {children}
    </TutorialNotificationContext.Provider>
  );
};
