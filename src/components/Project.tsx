import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import Image from "next/image";

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
  className?: string;
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
        <h2 className="text-lg">{subTitle}</h2>
        <h2 className="text-lg">{skillsUsed}</h2>
        <div className="flex">
          <div className="z-[99] mt-2">{githubButton}</div>
          <div className="z-[99] mt-2">{siteButton}</div>
        </div>

        <ul className="pl-6 mt-3 list-disc">
          {description.map((bulletPoint: any, i: number) => {
            return <li key={i}>{bulletPoint}</li>;
          })}
        </ul>
        <div className="absolute z-[-14] rounded-xl bg-gradient-to-t from-gray-700 via-gray-700  to-transparent h-full w-full top-0 right-0 " />
        {image ? (
          <Image
            layout="fill"
            alt={title}
            className="absolute z-[-15] top-0 right-0 h-full w-full rounded-xl"
            src={image}
          />
        ) : null}
      </div>
    </>
  );
}

export default Project;
