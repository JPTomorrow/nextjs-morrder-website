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

const generateTimings = (s: string, delay: number): number[] => {
  const timings = [];
  const letters = s.split("");
  const letterDelayIncrement = delay / (letters.length / 2);
  let currentDelay = delay;
  let decend = true;
  for (const i in letters) {
    if (currentDelay <= 0.0) decend = false;
    if (decend) {
      // decending
      currentDelay -= letterDelayIncrement;
      if (currentDelay < 0.0) timings.push(0.0);
      else timings.push(currentDelay);
    } else {
      // ascending
      currentDelay += letterDelayIncrement;
      if (currentDelay < 0.0) timings.push(0.0);
      else timings.push(currentDelay);
    }
  }
  return timings;
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
    <div id="" className="flex">
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
