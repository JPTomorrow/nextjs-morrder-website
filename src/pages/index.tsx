import type { NextPage } from "next";
import React from "react";
import Head from "next/head";

import WaveText from "@/components/WaveText";
import ScrollLink from "@/components/ScrollLink";
import ProfilePicture from "@/components/ProfilePicture";
import About from "@/components/page-contents/AboutPage";
import Projects from "@/components/page-contents/ProjectsPage";
import Email from "@/components/page-contents/ContactsPage";

import { GoArchive } from "react-icons/go";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const quote_lines = [
  "Knowledge must continually be renewed...",
  "It resembles a statue of marble...",
  "threatened by the shifting sands",
];

const Home: NextPage = () => {
  const landingRef = React.createRef<HTMLDivElement>();
  const newsRef = React.createRef<HTMLDivElement>();
  const projectsRef = React.createRef<HTMLDivElement>();
  const contactRef = React.createRef<HTMLDivElement>();
  const ScrollToPage = (ref: any) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Head>
        <title>Justin Morrow Portfolio</title>
        <meta name="description" content="Justin Morrow Portfolio" />
        <link rel="icon" href="/logo.webp" />
      </Head>

      <div className="nav">
        <ScrollLink
          onClick={() => ScrollToPage(landingRef)}
          icon={<AiOutlineHome size="24" />}
          tooltip="Home"
        />
        <ScrollLink
          onClick={() => ScrollToPage(newsRef)}
          icon={<BsPerson size="24" />}
          tooltip="About"
        />
        <ScrollLink
          onClick={() => ScrollToPage(projectsRef)}
          icon={<GoArchive size="24" />}
          tooltip="Projects"
        />
        <ScrollLink
          onClick={() => ScrollToPage(contactRef)}
          icon={<AiOutlineMail size="24" />}
          tooltip="Contact Me"
        />
      </div>
      <div className="space-bg rounded-divider z-[4] relative" ref={landingRef}>
        <div className="homepage-banner">
          <ProfilePicture />
          <WaveText
            startDelay={0.5}
            startHidden={true}
            loop={false}
            className="banner-name-text"
          >
            Justin Morrow
          </WaveText>
          <WaveText
            startDelay={0.8}
            startHidden={true}
            loop={false}
            className="banner-name-text text-xl"
          >
            Software Developer
          </WaveText>
          <WaveText
            startDelay={2.0}
            startHidden={true}
            className="banner-quote-text mt-5"
            loop={false}
          >
            {quote_lines[0] as string}
          </WaveText>
          <WaveText
            startDelay={2.5}
            startHidden={true}
            className="banner-quote-text"
            loop={false}
          >
            {quote_lines[1] as string}
          </WaveText>
          <WaveText
            startDelay={3.0}
            startHidden={true}
            className="banner-quote-text"
            loop={false}
          >
            {quote_lines[2] as string}
          </WaveText>
        </div>
      </div>
      {/* ABOUT PAGE */}
      <div
        className="rounded-divider rounded-div-offset relative z-[3] text-center bg-purple1 pb-10 h-full"
        ref={newsRef}
      >
        <About />
      </div>
      {/* PROJECTS PAGE */}
      <div
        ref={projectsRef}
        className="rounded-divider rounded-div-offset relative z-[2] text-center bg-purple2 pb-10 h-full"
      >
        <Projects />
      </div>
      {/* CONTACT PAGE */}
      <div
        ref={contactRef}
        className="rounded-div-offset relative z-[1] text-center bg-purple1 pb-10 h-full"
      >
        <Email />
      </div>
    </>
  );
};

export default Home;
