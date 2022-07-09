import { motion } from "framer-motion";

import { DiCss3, DiJavascript1, DiReact, DiMysql } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaVuejs, FaNodeJs, FaRust, FaPython } from "react-icons/fa";
import { SiCsharp, SiExpress } from "react-icons/si";

const gradColorOne = "#4aaeff";
const gradColorTwo = "#6d29ff";
const badge = {
  spin_gradient: {
    background: [
      `linear-gradient(to bottom, ${gradColorOne} 0%, ${gradColorTwo} 100%)`,
      `linear-gradient(to bottom, ${gradColorTwo} 0%, ${gradColorOne} 100%)`,
      `linear-gradient(to bottom, ${gradColorOne} 0%, ${gradColorTwo} 100%)`,
    ],
    transition: {
      duration: 3,
      type: "tween",
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const container = {
  show: {
    scale: [0.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      staggerChildren: 0.5,
      ease: "easeInOut",
    },
  },
};

const skillBadgeStyle = {
  width: "60px",
  height: "60px",
};

const skillBadges = {
  HTML: <AiFillHtml5 style={skillBadgeStyle} />,
  CSS: <DiCss3 style={skillBadgeStyle} />,
  js: <DiJavascript1 style={skillBadgeStyle} />,
  React: <DiReact style={skillBadgeStyle} />,
  Vue: <FaVuejs style={skillBadgeStyle} />,
  "node.js": <FaNodeJs style={skillBadgeStyle} />,
  MySQL: <DiMysql style={skillBadgeStyle} />,
  ".NET": <SiCsharp style={skillBadgeStyle} />,
  Rust: <FaRust style={skillBadgeStyle} />,
  Python: <FaPython style={skillBadgeStyle} />,
  Express: <SiExpress style={skillBadgeStyle} />,
};

const getSkillBadges = (start: number, end: number) => {
  return Object.entries(skillBadges)
    .slice(start, end)
    .map(([skill, icon]) => {
      return <SkillBadge key={skill} icon={icon} iconText={skill} />;
    });
};

const SkillBadge = ({
  icon,
  iconText,
}: {
  icon: JSX.Element;
  iconText: string;
}) => {
  return (
    <motion.div
      animate="spin_gradient"
      variants={badge}
      className="skill-badge-border"
    >
      <div className="skill-badge">
        <div className="flex justify-center">{icon}</div>
        <p className="text-white text-center">{iconText}</p>
      </div>
    </motion.div>
  );
};

function SkillBadges(props: any) {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        whileInView="show"
        variants={container}
        className="skill-badges grid-cols-3"
      >
        {getSkillBadges(0, 3)}
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView="show"
        variants={container}
        className="skill-badges grid-cols-4"
      >
        {getSkillBadges(3, 8)}
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView="show"
        variants={container}
        className="skill-badges grid-cols-4"
      >
        {getSkillBadges(8, 12)}
      </motion.div>
    </>
  );
}

export default SkillBadges;
