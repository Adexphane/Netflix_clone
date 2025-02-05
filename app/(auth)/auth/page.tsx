"use client";

import InputComp from "@/components/Input";
import React, { useCallback, useState } from "react";

const loginPage = () => {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getUsername, setUsername] = useState("");

  const [getVariant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className=" relative w-full h-screen bg-[url('/images/hero1.jpg')] bg-cover bg-no-repeat bg-center">
      <div className=' bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img src='/images/logo2.png' alt='logo' className='h-12' />
        </nav>
        <div className=' flex justify-center'>
          <div className=' bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/4 lg:max-w-md rounded-md w-full'>
            <h1 className=' text-white text-4xl mb-8 font-semibold'>
              {" "}
              {getVariant === "login" ? "Sign In" : "Register"}
            </h1>
            <div className=' flex flex-col gap-4'>
              {getVariant === "register" && (
                <InputComp
                  label='Username'
                  id='username'
                  type='text'
                  onChange={(vl) => setUsername(vl.target.value)}
                  value={getUsername}
                />
              )}
              <InputComp
                label='Email'
                id='email'
                type='email'
                onChange={(vl) => setEmail(vl.target.value)}
                value={getEmail}
              />
              <InputComp
                label='Password'
                id='password'
                type='password'
                onChange={(vl) => setPassword(vl.target.value)}
                value={getPassword}
              />
            </div>
            <button className=' bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
              {getVariant === "login" ? "Sign in" : "Create Account"}
            </button>
            <p className=' text-neutral-500 mt-12 text-xs text-center'>
              {getVariant === "login"
                ? "First time using Netflix?"
                : "Have an Account"}
              <span
                onClick={toggleVariant}
                className=' text-white ml-1 hover:underline cursor-pointer '
              >
                Create Account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
