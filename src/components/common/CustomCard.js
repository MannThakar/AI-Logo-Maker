import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignUpButton } from "@clerk/nextjs";

function CustomCard({ title, description, features, user }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1 list-disc ml-6">
          {features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        {user?.SignInButton ? (
          <Button>Select</Button>
        ) : (
          <SignUpButton
            mode="modal"
            forceRedirectUrl={`/generate-logo?type=` + title}
          >
            <Button>Select</Button>
          </SignUpButton>
        )}
      </CardFooter>
    </Card>
  );
}

export default CustomCard;
