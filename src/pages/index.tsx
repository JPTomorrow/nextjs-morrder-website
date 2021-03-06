import type { NextPage } from "next";
import React, { useRef, useState } from "react";

// import Particles from "react-tsparticles";
// import particleOptions from "../data/tsparticles-bg-config.json";
import { loadFull } from "tsparticles";

import WaveText from "../components/WaveText";
import ScrollLink from "../components/ScrollLink";

import { GoArchive } from "react-icons/go";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import About from "../components/AboutPage";
import Projects from "../components/ProjectsPage";
import Email from "../components/ContactsPage";
import Head from "next/head";

// const ParticleBg = () => {
//   const particlesInit = async (main: any) => {
//     await loadFull(main);
//   };

//   const particlesLoaded = (container: any) => {};

//   return (
//     <Particles
//       className="absolute top-0 left-0 h-full"
//       options={particleOptions as any}
//       init={particlesInit}
//       loaded={particlesLoaded as any}
//     />
//   );
// };

const quote_lines = [
  "Knowledge must continually be renewed...",
  "It resembles a statue of marble...",
  "threatened by the shiftinge sands",
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
        <title>Justin Morrow Personal Website</title>
        <meta name="description" content="Justin Morrow Personal Website" />
        <link rel="icon" href="/logo.png" />
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
      <div className="space-bg" ref={landingRef}>
        <div className="homepage-banner">
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
        {/* <ParticleBg /> */}
      </div>
      {/* ABOUT PAGE */}
      <div
        className="relative text-center bg-gray-900 pb-10 h-full"
        ref={newsRef}
      >
        <About />
      </div>
      {/* PROJECTS PAGE */}
      <div
        ref={projectsRef}
        className="relative text-center bg-gray-800 pb-10 h-full border-t-2"
      >
        <Projects />
      </div>
      {/* CONTACT PAGE */}
      <div
        ref={contactRef}
        className="relative text-center bg-gray-900 pb-10 h-full border-t-2"
      >
        <Email />
      </div>
    </>
  );
};

export default Home;
