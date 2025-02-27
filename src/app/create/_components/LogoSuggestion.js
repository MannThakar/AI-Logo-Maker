"use client";
import React, { useEffect, useState } from "react";
import Description from "./Description";
import { PROMPT, FORM_DATA } from "@/utils/constant";
import { Skeleton } from "@/components/ui/skeleton";

const LogoSuggestion = ({ handleUserInputChange, parentData }) => {
  const [suggestions, setSuggestions] = useState();
  const [loader, setLoader] = useState(false);
  const [selectSuggestion, setSelectSuggestion] = useState(null);

  const handleAiSuggestion = async () => {
    setLoader(true);
    try {
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

      const data = await response.json();
      setSuggestions(data.suggestions);
    } catch (error) {
      console.log(error);
      setLoader(false);
    } finally {
      setLoader(false);
    }
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
      <div className="mt-5 ">
        {loader && <Skeleton className="w-full h-[140px]  " />}
        {suggestions && suggestions.length > 0 ? (
          <div className="flex flex-wrap gap-4 h-fit">
            {suggestions.map((suggestion) => (
              <div key={suggestion.Idea} className="mt-4 ">
                <div
                  className={`whitespace-nowrap border border-primary px-4 py-1 rounded-full hover:bg-primary  cursor-pointer hover:text-white ${
                    selectSuggestion === suggestion.Idea &&
                    "bg-primary text-white"
                  }`}
                >
                  <p
                    onClick={() => {
                      setSelectSuggestion(suggestion.Idea);
                      handleUserInputChange(suggestion);
                    }}
                  >
                    {suggestion.Idea}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "No suggestion found"
        )}
      </div>
    </div>
  );
};

export default LogoSuggestion;
