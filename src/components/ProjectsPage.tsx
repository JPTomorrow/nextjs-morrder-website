import StarHeader from "../components/StarHeader";
import RoundedSeparator from "../components/RoundedSeparator";
import Project from "./Project";

interface ProjectData {
  title: string;
  subTitle: string;
  skillsUsed: string;
  description: string[];
  image: string;
  githubLink: string;
  siteLink?: string;
}

const proffesionalProjects: ProjectData[] = [
  {
    title: "LLAMA CHAT",
    subTitle: "Website",
    skillsUsed: "React, NextJS, tRPC, Pusher, Websockets",
    description: [
      "A chat app built on top of websocket technology",
      "Mimics Discord or Microsoft Teams in functionality",
      "Has rudimentary user authentication that can be expanded upon",
      "Messages are encrypted and no session is stored once all parties leave the chat",
    ],
    image: "/llamachat.png",
    githubLink:
      "https://github.com/JPThttps://github.com/JPTomorrow/nextjs-pusher-railway-chat-app",
    siteLink: "https://justins-chat-app.up.railway.app/",
  },
  {
    title: "Bill of Materials Generator",
    subTitle: "WPF Application",
    skillsUsed: "C#, WPF",
    description: [
      "Uses Revit API for interoperability with Autodesk Revit",
      "Generates Bill of Materials from the 3D CAD models that Revit produces",
      "Systems for calculating wire and Hanger systems for MEP conduit racks",
    ],
    image: "/bom-generator.png",
    githubLink:
      "https://github.com/JPTomorrow/revit-bill-of-materials-generator",
  },
  {
    title: "Marathon Training Videos",
    subTitle: "Website",
    skillsUsed: "Vue, Microsoft Azure, API's",
    description: [
      "A website for training marathon field workers in construction safety",
      "The employees must watch a video and complete a test",
      "The results of that test will be emailed to their supervisor for review",
      "Uses Microsoft azure to host the website and Azure functions to send the email to a supervisor",
    ],
    image: "/marathon-training-videos-pic.png",
    githubLink: "https://github.com/JPTomorrow/marathon-training-videos",
  },
  {
    title: "Bluebeam In Wall / Fire Alarm BOM Generator",
    subTitle: "CLI Application",
    skillsUsed: "C#, .NET Core, PDF format parsing",
    description: [
      "Generates a Bill of Materials for In Wall devices and Fire Alarm Systems using PDF's generated by Bluebeam",
      "Bluebeam has a system for custom markups that is used to build the in wall device boxes",
      "",
      "Uses Microsoft azure to host the website and Azure functions to send the email to a supervisor",
    ],
    image: "/bluebeam-in-wall-fire-alarm.png",
    githubLink: "https://github.com/JPTomorrow/bluebeam-pthree-in-wall",
  },
];

const Projects = () => {
  return (
    <>
      <StarHeader className="pt-20">Professional Projects</StarHeader>
      <div className="flex flex-col items-center mt-[75px] mb-[100px]">
        {Object.values(proffesionalProjects).map((project, i: number) => (
          <Project
            key={i}
            className="mt-5"
            title={project["title"]}
            subTitle={project["subTitle"]}
            skillsUsed={project["skillsUsed"]}
            description={project["description"]}
            image={project["image"]}
            githubLink={project["githubLink"]}
            siteLink={project["siteLink"]}
          />
        ))}
      </div>
      <RoundedSeparator className="fill-gray-800" />
    </>
  );
};

export default Projects;
