import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between  mt-5">
        <Image src="/navbar/logo.svg" alt="Logo" width={100} height={100} />
        <div>
          <Button className="font-bold">Get Started</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
