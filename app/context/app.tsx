"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { TPostCard } from "../types";

type AppContextType = {
  posts: TPostCard[];
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setPosts: React.Dispatch<React.SetStateAction<TPostCard[]>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

// App context for keeping a track of all the important values
const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside an AppProvider");
  }
  return context;
};

type Tcontext = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Tcontext) => {
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

  return (
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
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
