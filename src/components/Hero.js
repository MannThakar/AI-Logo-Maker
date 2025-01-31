"use client";
import React, { useState } from "react";
import { HERO_HEADING } from "../utils/constant";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  const [logoName, setLogoName] = useState("");
  return (
    <div className="container">
      <div className="mt-20  text-center">
        <h1 className="text-5xl font-bold ">
          {HERO_HEADING.title}
          <span className=" text-primary">{HERO_HEADING.keyword}</span>
        </h1>
        <p className="mt-5 text-2xl font-semibold ">{HERO_HEADING.subtitle}</p>
        <p className="mt-5 text-bold font-medium text-gray-700">
          {HERO_HEADING.description}
        </p>
      </div>
      <div className="mt-10 flex justify-center gap-5">
        <Input
          placeholder="Enter your logo name"
          className="w-4/6 h-12 rounded-md"
          onChange={(e) => setLogoName(e.target.value)}
        />
        {logoName ? (
          <Link href={`/create?title=${logoName}`}>
            <Button className="font-bold h-12 text-md rounded-md">
              Generate Logo
            </Button>
          </Link>
        ) : (
          <Button
            className="font-bold h-12 text-md rounded-md cursor-not-allowed"
            disabled
          >
            Generate Logo
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;
