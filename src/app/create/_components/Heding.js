"use client";
import React, { useEffect, useState } from "react";
import Description from "./Description";
import { FORM_DATA } from "@/utils/constant";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

const Heding = ({ handleUserInputChange }) => {
  const searchParams = useSearchParams();
  const [userInput, setInput] = useState(searchParams?.get("title"));
  const [logoTitle, setLogoTitle] = useState(searchParams?.get("title"));

  useEffect(() => {
    if (logoTitle) {
      handleUserInputChange(logoTitle);
    }
  }, []);

  return (
    <div>
      <Description
        formTitle={FORM_DATA.firstFormTitle}
        formDescription={FORM_DATA.firstFormDescription}
      />
      <div className="mt-4 mb-4">
        <Input
          placeholder="Your Logo Title"
          className="h-10"
          defaultValue={logoTitle}
          onChange={(e) => handleUserInputChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Heding;
