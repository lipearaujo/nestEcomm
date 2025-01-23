"use client";
import React, { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import User from "./User";

type Props = {};

function Menu({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative top-[3px]">
      <button className="border-none" onClick={handleMenu}>
        <IoPersonCircleSharp size={28} color="#f0f0f5" />
      </button>

      {isOpen && <User />}
    </div>
  );
}

export default Menu;
