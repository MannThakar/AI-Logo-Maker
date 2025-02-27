"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
const Navbar = () => {
  const { user } = useUser();
  return (
    <>
      <div className="flex items-center justify-between  mt-5">
        <Image src="/navbar/logo.svg" alt="Logo" width={100} height={100} />
        <div className="flex gap-5 items-center flex-row-reverse">
          {user ? (
            <Button className="font-bold">DashBoard</Button>
          ) : (
            <Button className="font-bold">Get Started</Button>
          )}
          <div className="flex items-center">{user && <UserButton />}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
