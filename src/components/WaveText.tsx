import { motion } from "framer-motion";

const getTxtVariant = (
  startDelay: number,
  delay: number,
  startHidden: boolean,
  loop: boolean
) => {
  return {
    changeColor: {
      color: [
        "rgba(255, 255, 255, 1)",
        "rgba(0, 20, 99, 1)",
        "rgba(255, 255, 255, 1)",
      ],
      scale: [1.0, 1.5, 1.0],
      transition: {
        delay: startDelay + delay + 0.5,
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
        repeat: loop ? Infinity : 0,
        repeatDelay: 10,
      },
    },
    changeOpacity: {
      opacity: 1,
      transition: {
        delay: startDelay + delay,
        duration: 0.5,
        type: "tween",
        ease: "easeOut",
      },
    },
    hide: {
      opacity: startHidden ? 0 : 1,
    },
  };
};

const generateTimings = (word: string, delay: number): number[] => {
  const letters = word.split("");
  const halfway = letters.length / 2;
  const delayInc = delay / halfway;

  return letters.map((_, i) =>
    i < halfway ? delayInc * (letters.length - i + 1) : delayInc * (i + 1)
  );
};

function WaveText({
  children,
  className,
  startHidden = false,
  loop = true,
  startDelay = 0.0,
}: {
  children: string;
  className?: string;
  startHidden?: boolean;
  loop?: boolean;
  startDelay?: number;
}) {
  const waveTimings = generateTimings(children, 0.9);

  return (
    <div className="flex">
      {children.split("").map((letter, i) => {
        const delay = waveTimings[i] as number;
        return (
          <motion.div
            key={i}
            initial="hide"
            animate={["changeColor", "changeOpacity"]}
            variants={getTxtVariant(startDelay, delay, startHidden, loop)}
            className={`${className}`}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.div>
        );
      })}
    </div>
  );
}

export default WaveText;
