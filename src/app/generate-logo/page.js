import React, { useContext, useEffect } from "react";
import Provider from "../Provider";
import UserDetailsContext from "../_context/UserDetails";

const generateLogo = () => {
  const { userDetails, setUserData } = useContext(UserDetailsContext);
  console.log("🚀 ~ generateLogo ~ userDetails:", userDetails);

  useEffect(() => {
    if (userDetails.email && typeof window !== "undefined") {
      const localFromData = getLocalStorage();
    }
  }, []);
  return (
    <Provider>
      <div>Single page generate logo</div>
    </Provider>
  );
};

export default generateLogo;
