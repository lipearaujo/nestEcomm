import React from "react";

type Props = {
  value: string;
  handleChange: (value: string) => void;
};

function InputSearch({ value, handleChange }: Props) {
  return (
    <input
      type="text"
      className="w-[325px] h-[42px]  rounded-tl-lg rounded-bl-lg p-2 bg-[#f0f0f5] outline-none placeholder-gray-500"
      name=""
      id=""
      placeholder="Search..."
      value={value}
      onChange={(event) => handleChange(event.target.value)}
    />
  );
}

export default InputSearch;
