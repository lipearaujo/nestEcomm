import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  style: string;
  onClick?: () => void;
};

const Button = (props: Props) => {
  return (
    <button onClick={props.onClick} className={props.style}>
      {props.children}
    </button>
  );
};

export default Button;
