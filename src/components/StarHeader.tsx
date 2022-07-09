import { motion } from "framer-motion";

const containerVarients = {};

const barVarients = (itemCount: number, index: number) => {
  return {
    expand: {
      scaleY: [0, 1, 0],
      originY: 0,
      transition: {
        delay: index * 0.09,
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };
};

function StarHeader(props: any) {
  function makeBars() {
    let bars = [];
    for (let i = 0; i < props.children.length; i++) {
      bars.push(
        <motion.div
          animate="expand"
          variants={barVarients(5, i)}
          key={i}
          className="w-[20%] bg-white h-[20px] m-[1px] rounded-b-lg"
        />
      );
    }
    return bars;
  }
  return (
    <div
      className={["relative inline-block w-auto", props.className].join(" ")}
    >
      <motion.h1 className="text-white text-3xl text-center border-b-[1px]">
        {props.children}
      </motion.h1>
      <div className="flex justify-center">{makeBars()}</div>
    </div>
  );
}

export default StarHeader;
