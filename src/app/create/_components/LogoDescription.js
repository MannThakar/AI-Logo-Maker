import React from "react";
import Description from "./Description";
import { FORM_DATA } from "@/utils/constant";
import { Textarea } from "@/components/ui/textarea";

const LogoDescription = ({ handleUserInputChange, parentData }) => {
  return (
    <div>
      <Description
        formTitle={FORM_DATA.secondFormTitle}
        formDescription={FORM_DATA.secondFormDescription}
      />
      <div className="mt-4">
        <Textarea
          placeholder="Describe your Idea here"
          onChange={(e) => handleUserInputChange(e.target.value)}
          defaultValue={parentData?.description}
        />
      </div>
    </div>
  );
};

export default LogoDescription;
