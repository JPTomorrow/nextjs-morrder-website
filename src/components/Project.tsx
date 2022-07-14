import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaYenSign } from "react-icons/fa";

const animContainers = () => {
  return <div className="absolute"></div>;
};

function Project({
  className,
  title,
  subTitle,
  skillsUsed,
  description,
  image,
  githubLink,
  siteLink,
}: {
  className: string;
  title: string;
  subTitle: string;
  skillsUsed: string;
  description: string[];
  image: string;
  githubLink: string;
  siteLink?: string;
}) {
  const githubButton = githubLink ? (
    <a href={githubLink}>
      <AiFillGithub size={48} />
    </a>
  ) : null;

  const siteButton = siteLink ? (
    <a href={siteLink}>
      <BsLink45Deg size={48} />
    </a>
  ) : null;

  const linkTitle = siteLink ? (
    <a
      href={siteLink}
      className="hover:text-teal-400 transition-all duration-300"
    >
      <h1 className="text-2xl">{title}</h1>
    </a>
  ) : (
    <h1 className="text-2xl">{title}</h1>
  );

  return (
    <>
      <div className={["project-container relative", className].join(" ")}>
        {linkTitle}
        <h2 className="text-xl">{subTitle}</h2>
        <h2 className="text-xl">{skillsUsed}</h2>
        <div className="flex">
          <div className="mt-2">{githubButton}</div>
          <div className="mt-2">{siteButton}</div>
        </div>

        <ul className="pl-6 mt-3 list-disc">
          {description.map((bulletPoint: any, i: number) => {
            return <li key={i}>{bulletPoint}</li>;
          })}
        </ul>
        <div className="absolute z-[-10] w-full h-full top-0 left-0 bg-gradient-to-r from-gray-700  via-gray-700 to-transparent" />
        {image ? (
          <img
            className="absolute z-[-15] top-0 right-0 h-full w-[600px]"
            src={image}
          />
        ) : null}
      </div>
    </>
  );
}

export default Project;
