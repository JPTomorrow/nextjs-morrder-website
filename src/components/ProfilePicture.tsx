import { motion } from "framer-motion";

const profileAnimation = {
  initial: {
    scale: [0.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const ProfilePicture = () => {
  return (
    <motion.div animate="initial" variants={profileAnimation}>
      <img
        src="/profile.webp"
        alt="Profile Picture"
        className=" mb-3 rounded-full w-[150px] h-[150px] border-[1px] border-white"
      />
    </motion.div>
  );
};

export default ProfilePicture;
