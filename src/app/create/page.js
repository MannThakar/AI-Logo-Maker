"use client";

import React, { useState } from "react";
import Provider from "../Provider";
import Heading from "./_components/Heding";
import { Button } from "@/components/ui/button";
import LogoDescription from "./_components/LogoDescription";
import LogoColorPalette from "./_components/LogoColorPalette";
import LogoDesignIdea from "./_components/LogoDesignIdea";
import LogoSuggestion from "./_components/LogoSuggestion";
import PricingModel from "./_components/PricingModel";
const CreateLogo = () => {
  const [steps, setSteps] = useState(1);
  const [formData, setFormData] = useState({});

  const handleForm = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  console.log(formData);
  return (
    <Provider>
      <div className="border border-gray-200 rounded-md p-10 w-3/4 mt-20 mx-auto">
        {steps === 1 ? (
          <Heading
            handleUserInputChange={(value) => handleForm("title", value)}
            parentData={formData}
          />
        ) : steps === 2 ? (
          <LogoDescription
            handleUserInputChange={(value) => handleForm("description", value)}
            parentData={formData}
          />
        ) : steps === 3 ? (
          <LogoColorPalette
            handleUserInputChange={(v) => handleForm("color", v)}
            parentData={formData}
          />
        ) : steps === 4 ? (
          <LogoDesignIdea
            handleUserInputChange={(v) => handleForm("idea", v)}
            parentData={formData}
          />
        ) : steps === 5 ? (
          <LogoSuggestion
            parentData={formData}
            handleUserInputChange={(v) => handleForm("suggestion", v)}
          />
        ) : steps === 6 ? (
          <PricingModel parentData={formData} />
        ) : null}
        <div className="flex justify-between">
          {steps != 1 && (
            <Button
              className="mt-5 font-400"
              variant="outline"
              onClick={() => setSteps(steps - 1)}
            >
              Previous
            </Button>
          )}

          {steps < 6 && (
            <Button className="mt-5 " onClick={() => setSteps(steps + 1)}>
              Next
            </Button>
          )}
        </div>
      </div>
    </Provider>
  );
};

export default CreateLogo;
