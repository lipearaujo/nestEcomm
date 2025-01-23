"use client";

import { createCookie } from "@/utils/cookies";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

type Props = {};

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setRegister({ ...register, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/users/register", register);
    } catch (error) {
      console.log(error);
    }

    setRegister({ name: "", email: "", password: "" });
  };

  return (
    <form
      method="POST"
      onSubmit={onSubmit}
      className="flex flex-col gap-10 items-center w-[450px] h-[400px] bg-white p-2 rounded-sm"
    >
      <h3 className="font-semibold text-2xl ">Register</h3>
      <div className="flex flex-col w-full gap-5">
        <input
          type="text"
          name="name"
          value={register.name}
          onChange={handleRegister}
          id=""
          className="w-full h-10 rounded-md outline-none p-2 bg-gray-200 border border-zinc-300 placeholder-gray-600"
          placeholder="Name"
        />
        <input
          type="text"
          name="email"
          value={register.email}
          onChange={handleRegister}
          id=""
          className="w-full h-10 rounded-md outline-none p-2 bg-gray-200 border border-zinc-300 placeholder-gray-600"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={register.password}
          onChange={handleRegister}
          id=""
          className="w-full h-10 rounded-md outline-none p-2 bg-gray-200 border border-zinc-300 placeholder-gray-600"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        className="bg-gray-200 w-[30%] p-2 rounded-lg hover:bg-[#42ffa0] hover:font-bold hover:shadow-lg hover:shadow-[#42ffa0] duration-300"
      >
        Register
      </button>
    </form>
  );
};

const Login = () => {
  const router = useRouter();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLogin({ ...login, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/users/login", login)
        .then((response) => {
          console.log(response.data);
          createCookie(response.data.access_token);
          localStorage.setItem("userId", response.data.userId);
          router.push("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-10 items-center w-[450px] h-[400px] bg-white p-2 rounded-sm"
    >
      <h3 className="font-semibold text-2xl ">Login</h3>
      <div className="flex flex-col w-full gap-5">
        <input
          type="text"
          name="email"
          value={login.email}
          onChange={handleLogin}
          id=""
          className="w-full h-10 rounded-md outline-none p-2 bg-gray-200 border border-zinc-300 placeholder-gray-600"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleLogin}
          id=""
          className="w-full h-10 rounded-md outline-none p-2 bg-gray-200 border border-zinc-300 placeholder-gray-600"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        className="bg-gray-200 w-[30%] p-2 rounded-lg hover:bg-[#42ffa0] hover:font-bold hover:shadow-lg hover:shadow-[#42ffa0] duration-300"
      >
        Login
      </button>
    </form>
  );
};

const Form = (props: Props) => {
  return (
    <div className="mt-10 flex items-center justify-evenly">
      <Register />
      <Login />
    </div>
  );
};

export default Form;
