"use client";

import { useRouter, usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import LoginIcon from "./components/icons/login";
import Logo from "./components/icons/logo";
import CustomToastProvider from "./components/customToast";
import { TPostCard } from "./components/PostCard";

// Custom Font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// App context for keeping a track of all the important values

type AppContextType = {
  posts: TPostCard[];
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setPosts: React.Dispatch<React.SetStateAction<TPostCard[]>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside an AppProvider");
  }
  return context;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  const [posts, setPosts] = useState<TPostCard[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  // Initialise all context values
  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    const storedUserName = localStorage.getItem("userName");
    const storedStatus = localStorage.getItem("status");

    if (storedPosts) setPosts(JSON.parse(storedPosts));
    if (storedUserName) setUserName(storedUserName);
    if (storedStatus) setStatus(storedStatus);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("status", status);
  }, [status]);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  // Logout logic
  const handleLogout = () => {
    router.push("/login");
    localStorage.setItem("status", "Not loggedin");
    setStatus("Not loggedin");
    setUserName("");
    localStorage.setItem("userName", "");
  };

  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* Toast Context */}
        <CustomToastProvider>
          {/* App Context */}
          <AppContext.Provider
            value={{
              posts,
              setPosts,
              status,
              setStatus,
              userName,
              setUserName,
            }}
          >
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
            {children}
          </AppContext.Provider>
        </CustomToastProvider>
      </body>
    </html>
  );
}
