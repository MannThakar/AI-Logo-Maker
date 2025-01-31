"use client";
import React, { use, useEffect } from "react";
import Description from "./Description";
import { PROMPT, FORM_DATA } from "@/utils/constant";

const LogoSuggestion = ({ parentData }) => {
  const handleAiSuggestion = async () => {
    const response = await fetch("/api/ai-design-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: PROMPT.DESIGN_IDEA_PROMPT.replace(
          "{logoType}",
          parentData.description
        )
          .replace("{logoTitle}", parentData.title)
          .replace("{logoDesc}", parentData.description)
          .replace("{logoPrompt}", parentData.idea.prompt),
      }),
    });
  };

  useEffect(() => {
    handleAiSuggestion();
  }, []);

  return (
    <div>
      <Description
        formTitle={FORM_DATA.fifthFormTitle}
        formDescription={FORM_DATA.fifthFormDescription}
      />
      <div className="mt-5"></div>
    </div>
  );
};

export default LogoSuggestion;
