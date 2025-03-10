"use client";
import Navbar from "@/components/common/Navbar";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDetailsContext from "./_context/UserDetails";
const Provider = ({ children }) => {
  const { user } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    user && checkAuth();
  }, [user]);

  const checkAuth = async () => {
    const result = await axios.post("/api/user", {
      userName: user?.firstName,
      userEmail: user?.primaryEmailAddress.emailAddress,
    });

    setUserData(result.data);
  };

  return (
    <div className="container">
      <UserDetailsContext.Provider value={{ userData, setUserData }}>
        <Navbar />
        {children}
      </UserDetailsContext.Provider>
    </div>
  );
};

export default Provider;
