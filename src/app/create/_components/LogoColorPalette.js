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

      <div className="mt-4 grid grid-col-reverse  grid-cols-3 gap-5 justify-items-center w-11/12 mx-auto">
        {COLOR_PALETTE?.map((individualPalette) => {
          return (
            <div key={individualPalette.id} className=" w-fit rounded-sm">
              <div
                className={`flex w-fit gap-y-2 cursor-pointer hover:outline ${
                  selectedPalette === individualPalette.name &&
                  "outline outline-3 outline-black"
                }`}
                key={individualPalette.id}
              >
                {individualPalette?.colors?.map((individualColor) => (
                  <div
                    style={{
                      backgroundColor: individualColor,
                      width: "50px",
                      height: "100px",
                      display: "flex",
                    }}
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
