import { useEffect, useState } from "react";
import { fetchUsername} from '../util/FetchUsername.js'

import ButtonLink from "./ButtonLink";

function Footer() {
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
      <div className="md:px-[12rem] px-10 flex justify-between items-center bg-slate-800 py-6 border-t border-white border-opacity-25">
        <div>
          <p className="md:text-lg text-sm">
            Made with <i className="fa-solid fa-heart text-red-500"></i> by
            {" "}{username}
          </p>
        </div>
        <div className="md:block hidden">
          <div className="flex gap-5">
            <ButtonLink
              icon="fa-github"
              title="Github"
              link="https://github.com/frostyflower"
            />
            <ButtonLink
              icon="fa-discord"
              title="Discord"
              link="https://discord.gg/2ux6xUQURh"
            />
          </div>
        </div>
        <div className="md:hidden block">
          <div className="flex gap-5">
            <a href="https://github.com/frostyflower">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a href="https://discord.gg/2ux6xUQURh">
              <i className="fa-brands fa-discord fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
