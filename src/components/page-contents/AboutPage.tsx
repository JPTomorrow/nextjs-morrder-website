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
        <p className="mission-statement">
          <div className="about-pic">
            <Image
              src="/about-pic.webp"
              alt="about pic"
              layout="fill"
              objectFit="cover"
            />
          </div>
          Justin Morrow is a software developer with a strong background in web
          technologies. With in-depth knowledge of NextJS, he is well-equipped
          to develop and maintain web applications that are efficient and
          user-friendly.
          <br />
          <br />
          In addition to his proficiency in web technologies, Justin has
          experience working with various programming languages, including C#
          and Rust. This diverse skill set allows him to approach problems with
          a multi-faceted perspective and find efficient solutions. Justin is
          dedicated to staying current with industry developments and trends. He
          is known for his ability to learn and adapt quickly, which makes him
          an asset to any software development team.
          <br />
          <br />
          As a software developer, Justin is passionate about creating
          high-quality, efficient, and user-friendly products. His work ethic,
          technical skills, and ability to work collaboratively make him a
          valuable addition to any organization.
        </p>
      </div>
      <StarHeader>Skills</StarHeader>
      <div className="std-comp-margin">
        <SkillBadges />
      </div>
    </>
  );
};

export default About;
