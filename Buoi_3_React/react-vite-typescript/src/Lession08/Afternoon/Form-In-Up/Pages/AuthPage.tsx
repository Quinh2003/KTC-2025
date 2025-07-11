import React, { useState } from "react";
import { EmailEntry } from "../Components/EmailEntry";
import { SignUpForm } from "../Components/SignUpForm";
import { SignInForm } from "../Components/SignInForm";

export interface UserInfo {
  name: string;
  email: string;
  password: string;
}

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState("jane.doe@gmail.com");
  const [name, setName] = useState("Jane Doe");

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-2 text-center text-gray-700">
        Afternoom - Lab 1 - Form Sign in and Sign up
      </h2>
      <div className=" flex items-center justify-center bg-pink-200 py-20">
        <div className="flex flex-row gap-6 max-w-full">
          <EmailEntry onContinue={(email) => setEmail(email)} />

          <SignUpForm
            email={email}
            onSignUp={(data) => {
              setName(data.name);
              console.log("Signed up:", data);
            }}
          />

          <SignInForm email={email} name={name} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
