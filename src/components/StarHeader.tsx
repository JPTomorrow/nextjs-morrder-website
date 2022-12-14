import { motion } from "framer-motion";

const barVarients = (index: number) => {
  return {
    expand: {
      scaleY: [0, 1, 0],
      originY: 0,
      transition: {
        delay: index * 0.09,
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
        repeat: 1,
        repeatDelay: 1,
      },
    },
  };
};

const Bar = ({ idx }: { idx: number }) => {
  return (
    <motion.div
      whileInView="expand"
      variants={barVarients(idx)}
      key={idx}
      className="w-[20%] bg-white h-[20px] m-[1px] rounded-b-lg"
    />
  );
};

const StarHeader = ({
  children,
  className,
}: {
  children?: React.ReactNode[] | string;
  className?: string;
}) => {
  return (
    <div className={`relative inline-block w-auto ${className}`}>
      <motion.h1 className="text-white text-3xl text-center border-b-[1px]">
        {children}
      </motion.h1>
      <div className="flex justify-center">
        {Array.from(Array(children!.length), (_, i) => (
          <Bar key={i} idx={i} />
        ))}
      </div>
    </div>
  );
};

export default StarHeader;
