import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import "./AboutMe.css";
import ButtonGlow from "../components/ButtonGlow";

function AboutMe() {
  const uuid = "a2e71b1b-fb24-4b19-97ab-9a9f3bb38f61";
  const [username, setUsername] = useState("Fetching username...");

  useEffect(() => {
    const fetchUsername = async () => {
      const url = `https://api.minetools.eu/uuid/${uuid}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Data fetched:", data);
        if (data.name) {
          setUsername(data.name);
        } else {
          setUsername("Username not found");
        }
      } catch (error) {
        console.error("Error fetching username:", error);
        setUsername("Error fetching username");
      }
    };
    fetchUsername();
  }, [uuid]);

  return (
    <>
      <div className="grid overflow-hidden">
        <div className="stacked-div z-[1] flex items-center md:mx-[12rem] mx-10 md:gap-6 gap-0 h-screen">
          <div>
            <img
              className="hidden md:block"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              nobis assumenda sint dolorem, laboriosam eligendi vitae, iusto,
              ratione error beatae repudiandae hic eveniet veniam nostrum?
              Dignissimos deleniti distinctio aliquam in.
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
