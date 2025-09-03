"use client";

import { useState } from "react";
import LoginIcon from "../icons/login";
import { TuserCreds, validUsers } from "../../helper/validCred";
import { useToast } from "../customToast";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/layout";

type TloginCard = {
  setIsLogin?: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginCard = ({ setIsLogin }: TloginCard) => {
  const [userCreds, setUserCreds] = useState<TuserCreds>({
    userName: "",
    password: "",
  });

  const { setUserName, setStatus } = useAppContext();

  const { showToast } = useToast();
  const router = useRouter();

  // Form submission logic
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      validUsers.find(
        (itm) =>
          itm.userName === userCreds.userName &&
          itm.password === userCreds.password
      )
    ) {
      showToast("User Found");
      router.push("/");
      localStorage.setItem("status", "Loggedin");
      setStatus("Loggedin");
      localStorage.setItem("userName", userCreds.userName.split("@")[0]);
      setUserName(userCreds.userName.split("@")[0]);
    } else showToast("Invalid Creds");
  };

  // Handle transiton to next screen/page
  const moveToSignup = () => {
    if (setIsLogin) {
      setIsLogin(false);
    } else {
      router.push("/signup");
    }
  };

  return (
    <div className="bg-[#ececec] rounded-2xl max-w-[420px] w-full m-auto p-2">
      <div className="bg-white rounded-xl customShadow py-8 px-12">
        <div className="rounded-full bg-gray-100 w-max m-auto p-2 mb-4">
          <LoginIcon />
        </div>
        <div className="text-center">
          <h2 className="font-bold">Sign in to continue</h2>
          <p className="text-gray-400 text-xs">
            Sign in to access all the features of this app
          </p>
        </div>
        <div className="mt-12">
          <form onSubmit={handleSubmit}>
            <div>
              <p className="text-sm mb-2 font-semibold">Email or username</p>
              <input
                value={userCreds.userName}
                onChange={(e) =>
                  setUserCreds({ ...userCreds, userName: e.target.value })
                }
                type="text"
                required
                placeholder="Enter your email or username"
                className="p-2 rounded-lg bg-gray-100 text-sm w-full focus:outline-none focus:ring-0 focus:border-transparent"
              />
            </div>
            <div className="my-6">
              <p className="text-sm mb-2 font-semibold">Password</p>
              <input
                value={userCreds.password}
                type="password"
                required
                onChange={(e) =>
                  setUserCreds({ ...userCreds, password: e.target.value })
                }
                placeholder="Enter your password"
                className="p-2 rounded-lg bg-gray-100 text-sm w-full focus:outline-none focus:ring-0 focus:border-transparent"
              />
            </div>
            <div className="my-6">
              <button
                type="submit"
                className="text-center bg-blue-500 w-full text-sm text-white cursor-pointer rounded-xl p-3"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center py-3">
        <p className="text-xs text-gray-600">
          Do not have a account?{" "}
          <span className="text-blue-700 cursor-pointer" onClick={moveToSignup}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
