"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { destroySession, getSession } from "@/hooks/useCookies";
import axios from "axios";

type Props = {};

const User = (props: Props) => {
  const [cookies, setCookies] = useState<string | null>();
  const [user, setUser] = useState("");

  const getUser = async () => {
    const token = cookies;
    try {
      await axios
        .get(`http://localhost:3001/users/${localStorage.getItem("userId")}`)
        .then((response) => {
          setUser(response.data.username);
        });
    } catch (error) {}
  };

  useEffect(() => {
    getSession().then((response) => {
      setCookies(response);
    });
    getUser();
  }, []);

  return (
    <div className="absolute bg-[#f0f0f5] rounded-md w-44 shadow-lg py-2 flex flex-col justify-center">
      {cookies !== null ? (
        <>
          <div className="border-b p-2 mb-4 border-gray-300 ">
            <span className="">Hello, {user}</span>
          </div>

          <Link
            className="p-2 hover:rounded-md hover:bg-gray-200"
            href="/purchased"
          >
            Purchased
          </Link>
          <button
            className="text-start p-2 hover:rounded-md hover:bg-gray-200"
            onClick={destroySession}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="p-2 hover:rounded-md hover:bg-gray-200" href="/auth">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default User;
