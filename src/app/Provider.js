import Navbar from "@/components/common/Navbar";
import React from "react";

const Provider = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
};

export default Provider;
