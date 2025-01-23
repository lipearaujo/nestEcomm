import React, { useEffect, useState } from "react";
import Menu from "./Menu";

import { FaCartShopping } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

import Link from "next/link";
import InputSearch from "./InputSearch";
import { useFilter } from "@/hooks/useFilter";

type Props = {};

const Header = (props: Props) => {
  const { search, setSearch } = useFilter();

  return (
    <header className="w-full h-20 bg-zinc-900">
      <div className="container mx-auto flex items-center justify-between h-full">
        <h1 className="text-3xl text-[#f0f0f5]">
          <Link href="/">N-eComm</Link>
        </h1>
        <div className="flex gap-4 items-center">
          <div className="flex items-center">
            <InputSearch value={search} handleChange={setSearch} />
            <div className="bg-[#f0f0f5] px-5 rounded-tr-lg rounded-br-lg">
              <IoSearchSharp size={24} className="cursor-pointer h-[42px]  " />
            </div>
          </div>
          <Link href="/checkout">
            <FaCartShopping size={24} color="#f0f0f5" />
          </Link>
          <div>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
