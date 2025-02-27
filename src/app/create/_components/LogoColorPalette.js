"use client";
import React, { useState } from "react";
import Description from "./Description";
import { FORM_DATA, COLOR_PALETTE } from "@/utils/constant";
const LogoColorPalette = ({ handleUserInputChange, parentData }) => {
  const [selectedPalette, setSelectedPalette] = useState(parentData?.color);

  return (
    <div>
      <Description
        formTitle={FORM_DATA.thirdFormTitle}
        formDescription={FORM_DATA.thirdFormDescription}
      />
      <div className="mt-4 grid grid-col-reverse  lg:grid-cols-3  lg:gap-5 justify-items-center w-11/12 mx-auto sm:grid-cols-2 sm:w-full sm:gap-4">
        {COLOR_PALETTE?.map((individualPalette, key) => {
          return (
            <div key={individualPalette.id} className=" w-fit rounded-sm">
              <div
                className={`flex w-fit gap-y-2 cursor-pointer hover:outline ${
                  selectedPalette === individualPalette.name &&
                  "outline outline-3 outline-black"
                }`}
                key={key}
              >
                {individualPalette?.colors?.map((individualColor) => (
                  <div
                    style={{
                      backgroundColor: individualColor,
                    }}
                    className="lg:w-12 lg:h-24 flex sm:w-8 sm:h-20"
                    onClick={() => {
                      setSelectedPalette(individualPalette.name);
                      handleUserInputChange(individualPalette);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoColorPalette;
