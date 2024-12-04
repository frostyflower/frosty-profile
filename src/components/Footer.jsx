import ButtonLink from "./ButtonLink";

function Footer() {
  return (
    <>
      <div className="md:px-[12rem] px-10 flex justify-between items-center bg-slate-800 py-6 border-t border-white border-opacity-25">
        <div>
          <p className="md:text-lg text-sm">
            Made with <i className="fa-solid fa-heart text-red-500"></i> by
            FrostyFlower
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
