import React from "react";

const Description = ({ formTitle, formDescription }) => {
  return (
    <div>
      <h2 className="text-3xl text-primary font-bold ">{formTitle}</h2>
      <p className="text-gray-500"> {formDescription}</p>
    </div>
  );
};

export default Description;
