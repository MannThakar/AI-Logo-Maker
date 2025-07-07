import React, { useContext, useEffect } from "react";
import { FORM_DATA } from "@/utils/constant";
import Description from "./Description";
import CustomCard from "@/components/common/CustomCard";
import { setLocalStorage } from "@/utils/helper";
import { useUser } from "@clerk/nextjs";
import UserDetailsContext from "@/app/_context/UserDetails";

const PricingModel = ({ parentData }) => {
  const { user } = useUser();

  useEffect(() => setLocalStorage(parentData?.title, parentData), [parentData]);
  return (
    <div>
      <Description
        formTitle={FORM_DATA.sixthFormTitle}
        formDescription={FORM_DATA.sixthFormDescription}
      />
      <div className="flex justify-between  mt-5 w-10/12 mx-auto">
        {FORM_DATA?.pricingOption?.map((item) => (
          <CustomCard
            title={item.title}
            description={item.description}
            features={item.features}
            button={item.button}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingModel;
