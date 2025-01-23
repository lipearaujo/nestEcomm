import Form from "@/components/Form";
import React from "react";

type Props = {};

const Auth = (props: Props) => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-center text-4xl font-bold">Auth</h2>
      <Form />
    </div>
  );
};

export default Auth;
