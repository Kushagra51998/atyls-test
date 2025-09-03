"use client";

import { useAppContext } from "@/app/context/app";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../icons/logo";
import LoginIcon from "../icons/login";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { setStatus, setUserName, status } = useAppContext();

  // Logout logic
  const handleLogout = () => {
    router.push("/login");
    // localStorage.setItem("status", "Not loggedin");
    setStatus("Not loggedin");
    setUserName("");
    // localStorage.setItem("userName", "");
  };

  return (
    <div className="flex justify-between p-6">
      <div className="flex gap-2 items-center justify-center">
        <div className="rotate-90">
          <Logo />
        </div>
        <h2 className="font-bold">Foo-rum</h2>
      </div>
      {["/login", "/signup"].includes(pathname) ? (
        <div
          className="flex gap-2 items-center font-bold text-base justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <h2>Back to home</h2>
        </div>
      ) : (
        <div
          className="flex gap-2 items-center justify-center font-bold cursor-pointer"
          onClick={handleLogout}
        >
          {status === "Loggedin" ? <h2>Logout</h2> : <h2>Login</h2>}

          <div>
            <LoginIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
