"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { TbArrowBackUp } from "react-icons/tb";

type Props = {
  navigate: string;
};

const BackButton = (props: Props) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(props.navigate);
  };

  return (
    <button onClick={handleNavigate} className="flex gap-2 w-fit ">
      <TbArrowBackUp
        className="text-gray-600 border border-gray-600 rounded-full"
        size={24}
      />
      <span className="text-gray-600 font-semibold">Back</span>
    </button>
  );
};

export default BackButton;
