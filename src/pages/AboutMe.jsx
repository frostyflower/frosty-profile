import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { fetchUsername } from "../util/FetchUsername.js";

import "./AboutMe.css";
import ButtonGlow from "../components/ButtonGlow";

function AboutMe() {
  const uuid = "a2e71b1b-fb24-4b19-97ab-9a9f3bb38f61";
  const [username, setUsername] = useState("Fetching username...");

  useEffect(() => {
    const getUsername = async () => {
      try {
        const name = await fetchUsername(uuid);
        setUsername(name);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setUsername("Error fetching username");
      }
    };
    getUsername();
  }, [uuid]);

  return (
    <>
      <div className="grid overflow-hidden">
        <div className="stacked-div z-[1] flex items-center md:mx-[12rem] mx-10 md:gap-6 gap-0 h-screen">
          <div>
            <img
              className="hidden md:block max-h-[400px]"
              src={`https://nmsr.nickac.dev/fullbodyiso/${uuid}`}
              alt={uuid}
            />
          </div>
          <div className="block">
            <div className="flex flex-row justify-center">
              <img
                className="md:hidden h-[200px] pb-6"
                src={`https://nmsr.nickac.dev/face/${uuid}`}
                alt={uuid}
              />
            </div>
            <p className="mb-4 text-xl">
              Hi, I&apos;m{" "}
              <span className="text-3xl font-bold">{username}</span>
            </p>
            <p className="mb-4">
              A Minecraft player for 10+ years and been doing quite a few servers. <br/>
              Contact below for Skript and small or medium size plugins.
            </p>
            <ButtonGlow link="#experiences" />
          </div>
        </div>
        <div className="stacked-div z-0 block">
          <Parallax speed={-100} className="md:block hidden">
            <div id="background"></div>
          </Parallax>
          <div id="background" className="md:hidden block"></div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
