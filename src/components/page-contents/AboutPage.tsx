import StarHeader from "@/components/StarHeader";
import SkillBadges from "@/components/SkillBadges";

const About = () => {
  return (
    <>
      <StarHeader className="std-hdr-t-pad">About Me</StarHeader>
      <div className="mission-statement">
        Software Developer with greater than 4 years of hands-on experience
        designing and integrating software to meet a client&apos;s needs who is
        a self-taught professional out of passion for programming. Currently
        seeking a role to expand knowledge of back-end technologies, and
        testing.
      </div>
      <StarHeader>Skills</StarHeader>
      <div className="my-[75px]">
        <SkillBadges />
      </div>
    </>
  );
};

export default About;
