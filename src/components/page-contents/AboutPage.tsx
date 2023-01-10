import StarHeader from "@/components/StarHeader";
import SkillBadges from "@/components/SkillBadges";
import Image from "next/image";

const About = () => {
  const width = 400;
  const height = width - width / 3; // 4/3 aspect
  return (
    <>
      <StarHeader className="std-hdr-t-pad">About Me</StarHeader>
      <div className="about-container std-comp-margin">
        <div className="about-pic">
          <Image
            src="/about-pic.webp"
            alt="about pic"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="mission-statement">
          Software Developer with greater than 5 years of hands-on experience
          designing and integrating software to meet a client&apos;s needs.
          Currently seeking a role to expand knowledge of back-end technologies,
          and testing.
        </div>
      </div>
      <StarHeader>Skills</StarHeader>
      <div className="std-comp-margin">
        <SkillBadges />
      </div>
    </>
  );
};

export default About;
