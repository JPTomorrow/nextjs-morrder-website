import StarHeader from "../components/StarHeader";
import SkillBadges from "../components/SkillBadges";
import RoundedSeparator from "../components/RoundedSeparator";

const About = () => {
  return (
    <>
      <StarHeader className="pt-20">About Me</StarHeader>
      <div className="mission-statement">
        Software Developer with greater than 4 years of hands-on experience
        designing and integrating software to meet a client's needs who is a
        self-taught professional out of passion for programming. Currently
        seeking a role to expand knowledge of back-end technologies, and
        testing.
      </div>
      <StarHeader>Skills</StarHeader>
      <div className="my-[75px]">
        <SkillBadges />
      </div>
      <RoundedSeparator className="fill-gray-900" />
    </>
  );
};

export default About;
