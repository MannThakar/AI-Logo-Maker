"use client";
import React, { useState } from "react";
import { FORM_DATA, LOGO_TEMPLATES } from "@/utils/constant";
import Description from "./Description";
import Image from "next/image";

const LogoDesignIdea = ({ handleUserInputChange, parentData }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(parentData?.idea);
  return (
    <div>
      <Description
        formTitle={FORM_DATA.fourthFormTitle}
        formDescription={FORM_DATA.fourthFormDescription}
      />
      <div className="mt-4 grid grid-cols-3 gap-8 ">
        {LOGO_TEMPLATES.map((logo) => (
          <div
            key={logo.title}
            className={`hover:outline p-1 cursor-pointer ${
              selectedTemplate === logo.title &&
              "outline outline-3 outline-black"
            }`}
            onClick={() => {
              setSelectedTemplate(logo.title);
              handleUserInputChange(logo);
            }}
          >
            <Image
              src={logo.image}
              alt={logo.title}
              width={250}
              height={250}
              className="rounded-md center mx-auto "
            />
            <h4 className="text-center mt-3 font-semibold">{logo.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDesignIdea;
