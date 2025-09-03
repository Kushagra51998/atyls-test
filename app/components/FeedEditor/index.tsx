"use client";

import { useToast } from "../customToast";
import BoldIcon from "../icons/bold";
import BulletListIcon from "../icons/bulletList";
import CodeIcon from "../icons/code";
import DeleteIcon from "../icons/delete";
import EmojiIcon from "../icons/emoji";
import ItalicIcon from "../icons/italics";
import MicIcon from "../icons/mic";
import NumberedListIcon from "../icons/numberedList";
import PlusIcon from "../icons/plus";
import QuoteIcon from "../icons/quote";
import SendIcon from "../icons/send";
import UnderlineIcon from "../icons/underline";
import VideoIcon from "../icons/video";
import dynamic from "next/dynamic";

const CustomModal = dynamic(() => import("../customModal"), { ssr: false });
import LoginCard from "../LoginCard/index";
import { useEffect, useState } from "react";
import type { TPostCard } from "@/app/types/index";

import SignupCard from "../signupCard";
import { motion } from "framer-motion";
import { useAppContext } from "@/app/context/app";

const FeedEditor = () => {
  const { showToast } = useToast();

  const { userName, status, posts, setPosts } = useAppContext();
  const [isLogin, setIsLogin] = useState(true);

  const [isModalOpen, setModalOpen] = useState(false);
  const [userPost, setUserPost] = useState<TPostCard>({
    description: "",
    emoji: "/images/emoji1.png",
    image: "/images/man.avif",
    name: userName,
    time: `${new Date()}`,
  });

  // If the user logged in, Close the modal
  useEffect(() => {
    if (status === "Loggedin") setModalOpen(false);
  }, [status]);

  // Handling Alerts
  const showAlert = () => {
    if (status !== "Loggedin") {
      setModalOpen(true);
    } else {
      // showToast("Function not implemented");
    }
  };

  // Saving the post in localStorage
  const saveToDb = () => {
    if (userPost.description) {
      if (posts?.length) {
        // localStorage.setItem("posts", JSON.stringify([userPost, ...posts]));
        setPosts([userPost, ...posts]);
      } else {
        // localStorage.setItem("posts", JSON.stringify([userPost]));
        setPosts([userPost]);
      }
      setUserPost({
        ...userPost,
        description: "",
      });
      showToast("Saved Sucessfully");
    } else {
      showToast("Post cannot be empty");
    }
  };

  return (
    <div className="mainCard">
      <div className="flex justify-between gap-2 items-center ">
        <div className="flex items-center gap-6 bg-gray-100 p-1 overflow-x-auto rounded-lg w-max">
          <motion.div
            className="cursor-pointer"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <h2 onClick={showAlert} className="bg-white p-2 rounded-lg ">
              Paragraph
            </h2>
          </motion.div>
          <div className="flex gap-4 items-center">
            <motion.div
              className="bg-white p-2 rounded-lg cursor-pointer"
              onClick={showAlert}
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <BoldIcon width={20} height={20} />
            </motion.div>
            <motion.div
              className="cursor-pointer"
              onClick={showAlert}
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <ItalicIcon width={20} height={20} />
            </motion.div>
            <motion.div
              className="cursor-pointer"
              onClick={showAlert}
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <UnderlineIcon width={20} height={20} />
            </motion.div>
          </div>
          <div className="flex gap-4 border-r px-4 items-center border-r-gray-400 border-l border-l-gray-400">
            <motion.div
              className="cursor-pointer"
              onClick={showAlert}
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <BulletListIcon width={20} height={20} />
            </motion.div>
            <motion.div
              className="cursor-pointer"
              onClick={showAlert}
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <NumberedListIcon width={20} height={20} />
            </motion.div>
          </div>
          <div className="flex gap-4 items-center">
            <motion.div
              className="cursor-pointer"
              onClick={showAlert}
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <CodeIcon width={20} height={20} />
            </motion.div>
            <motion.div
              className="cursor-pointer mr-4"
              onClick={showAlert}
              whileHover={{
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <QuoteIcon width={20} height={20} />
            </motion.div>
          </div>
        </div>
        <motion.div
          onClick={showAlert}
          className="bg-red-200 p-2 rounded-md cursor-pointer"
          whileHover={{
            scale: 1.1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <DeleteIcon width={20} fill={"red"} height={20} />
        </motion.div>
      </div>
      <div className="flex gap-3 my-4 items-start">
        <motion.div
          onClick={showAlert}
          className="cursor-pointer"
          whileHover={{
            scale: 1.1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <EmojiIcon width={20} height={20} />
        </motion.div>
        <textarea
          value={userPost.description}
          onChange={(e) =>
            setUserPost({
              ...userPost,
              name: userName,
              description: e.target.value,
            })
          }
          placeholder="How are you feeling today?"
          className="w-full focus:outline-none focus:ring-0 focus:border-transparent resize-none text-gray-800"
          rows={5}
        />
      </div>
      <div className="border-t border-t-gray-300 py-2 flex justify-between items-center">
        <div className="flex gap-4 p-2">
          <motion.div
            onClick={showAlert}
            className="cursor-pointer"
            whileHover={{
              scale: 1.2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <PlusIcon width={20} height={20} />
          </motion.div>
          <motion.div
            onClick={showAlert}
            className="cursor-pointer"
            whileHover={{
              scale: 1.2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <MicIcon width={20} height={20} />
          </motion.div>
          <motion.div
            onClick={showAlert}
            className="cursor-pointer"
            whileHover={{
              scale: 1.2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <VideoIcon width={20} height={20} />
          </motion.div>
        </div>
        <motion.div
          onClick={status === "Loggedin" ? saveToDb : showAlert}
          className="cursor-pointer"
          whileHover={{
            scale: 1.2,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <SendIcon width={30} height={30} />
        </motion.div>
      </div>
      {/* Modal opens if the user is not logged in  */}
      <CustomModal
        isOpen={isModalOpen}
        content={
          isLogin ? (
            <LoginCard setIsLogin={setIsLogin} />
          ) : (
            <SignupCard setIsLogin={setIsLogin} />
          )
        }
      />
    </div>
  );
};

export default FeedEditor;
