import { motion } from "framer-motion";
import Image from "next/image";

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
    <motion.div
      className="border-[1px] w-[150px] h-[150px] border-white mb-3 rounded-full"
      animate="initial"
      variants={profileAnimation}
    >
      <Image
        src="/profile.webp"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full"
      />
    </motion.div>
  );
};

export default ProfilePicture;
