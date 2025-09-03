import Image from "next/image";
import CommentIcon from "../icons/comment";
import HeartIcon from "../icons/heart";
import ShareIcon from "../icons/share";
import { useEffect, useState } from "react";
import { useToast } from "../customToast";
import CustomModal from "../customModal/index";
import LoginCard from "../LoginCard/index";
import { useAppContext } from "@/app/layout";
import SignupCard from "../signupCard";
import { motion } from "framer-motion";

export type TPostCard = {
  name: string;
  description: string;
  image: string;
  emoji: string;
  time: string;
};

// Main component to render the post card
const PostCard = ({ description, emoji, image, name, time }: TPostCard) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { showToast } = useToast();
  const { status } = useAppContext();

  // Handle Alerts
  const showAlert = () => {
    if (status !== "Loggedin") {
      setModalOpen(true);
    } else {
      showToast("Function not implemented");
    }
  };

  // Check if the user is logged in
  useEffect(() => {
    if (status === "Loggedin") {
      setModalOpen(false);
    }
  }, [status]);

  return (
    <div className="bg-gray-100 rounded-xl p-2">
      <div className="customShadow bg-white p-4  rounded-xl">
        <div className="flex gap-4">
          <div>
            <Image
              className="rounded-sm"
              src={image}
              alt="Logo"
              width={40}
              height={40}
            />
          </div>
          <div>
            <h2 className="text-base">{name}</h2>
            <p className="text-xs text-gray-500">{time}</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4 py-1">
          <div className="bg-gray-200 rounded-full h-max w-max flex-shrink-0 p-2">
            <Image src={emoji} alt="Logo" width={20} height={20} />
          </div>
          <div>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-2 items-center">
        <motion.div
          onClick={showAlert}
          className="cursor-pointer"
          whileHover={{
            scale: 1.15,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <HeartIcon />
        </motion.div>
        <motion.div
          onClick={showAlert}
          className="cursor-pointer"
          whileHover={{
            scale: 1.15,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <CommentIcon width={25} height={25} />
        </motion.div>
        <motion.div
          onClick={showAlert}
          className="cursor-pointer"
          whileHover={{
            scale: 1.15,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <ShareIcon />
        </motion.div>
      </div>
      {/* Modal opens if the user in not logged in */}
      <CustomModal
        isOpen={isModalOpen}
        children={
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

export default PostCard;
