"use client";

import { useRouter } from "next/navigation";
import LoginIcon from "../icons/login";

type TloginCard = {
  setIsLogin?: React.Dispatch<React.SetStateAction<boolean>>;
};

// Main component to handle signup logic

const SignupCard = ({ setIsLogin }: TloginCard) => {
  const router = useRouter();

  // Handle the logic for next screen/page
  const moveToSignIn = () => {
    if (setIsLogin) {
      setIsLogin(true);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="bg-[#ececec] rounded-2xl max-w-[420px] w-full m-auto p-2">
      <div className="bg-white rounded-xl customShadow py-8 px-12">
        <div className="rounded-full bg-gray-100 w-max m-auto p-2 mb-4">
          <LoginIcon />
        </div>
        <div className="text-center">
          <h2 className="font-bold">Create an account to continue</h2>
          <p className="text-gray-400 text-xs">
            Create an account to access all the features of this app
          </p>
        </div>
        <div className="mt-12">
          <form>
            <div>
              <p className="text-sm mb-2 font-semibold">Email or username</p>
              <input
                type="text"
                placeholder="Enter your email or username"
                className="p-2 rounded-lg bg-gray-100 text-sm w-full focus:outline-none focus:ring-0 focus:border-transparent"
              />
            </div>
            <div className="my-6">
              <p className="text-sm mb-2 font-semibold">Password</p>
              <input
                type="password"
                placeholder="Enter your password"
                className="p-2 rounded-lg bg-gray-100 text-sm w-full focus:outline-none focus:ring-0 focus:border-transparent"
              />
            </div>
            <div className="my-6">
              <p className="text-sm mb-2 font-semibold">Repeat Password</p>
              <input
                type="password"
                placeholder="Enter your password again"
                className="p-2 rounded-lg bg-gray-100 text-sm w-full focus:outline-none focus:ring-0 focus:border-transparent"
              />
            </div>
            <div className="my-6">
              <button className="text-center bg-blue-500 w-full text-sm text-white rounded-xl p-3">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center py-3">
        <p className="text-xs text-gray-600">
          Do you have an account ?{" "}
          <span className="text-blue-700 cursor-pointer" onClick={moveToSignIn}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupCard;
