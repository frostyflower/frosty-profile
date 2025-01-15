// import Card from "../components/Card";

import Card from "../components/Card";
import Title from "../components/Title";
import "../pages/Experiences.css";

import ChesterSMP from "../assets/ChesterSMP.jpg";
import LeverSMP from "../assets/LeverSMP.jpg";
import Minehut from "../assets/Minhut.png";

// import JS from "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg";
// import Java from "https://www.vectorlogo.zone/logos/java/java-icon.svg";
// import CSharp from "https://raw.githubusercontent.com/abranhe/programming-languages-logos/e1be48ad2dffe3e6e0e24fdefa9e740167fb2315/src/csharp/csharp.svg";

function Experiences() {
  return (
    <>
      <div className="experiences-page">
        <div className="block">
          <Title title="Programming" />
          <div className="grid md:grid-cols-3 md:mx-[12rem] mx-10 md:gap-[4rem] gap-[2rem]">
            <Card
              imageUrl="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
              description="I use JavaScript mainly for Front-End web development only. Maybe one day I'll be learning Node.js."
            />
            <Card
              imageUrl="https://www.vectorlogo.zone/logos/java/java-icon.svg"
              description="Used to code Minecraft plugins and Back-End web development with Spring framework."
            />
            <Card
              imageUrl="https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg"
              description="I use C# for Windows Form app and Back-End web development with .NET framework. Alhough not as much as the other two."
            />
          </div>
          <Title title="Servers" />
          <div className="grid md:grid-cols-3 md:mx-[12rem] mx-10 pb-12 md:gap-[4rem] gap-[2rem]">
            <div className="">
              <Card
                imageUrl={ChesterSMP}
                description="I worked on ChesterSMP on late 2022 to early 2023. Mostly do server configurations."
              />
            </div>
            <div className="">
              <Card
                imageUrl={LeverSMP}
                description="Worked on LeverMC on beginning of 2024 to the middle of 2024. Done a bunch of server setup on VPS."
              />
            </div>
            <div className="">
              <Card
                imageUrl={Minehut}
                description="Working on some small multi-gamemode server on Minehut on last november 2024."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;
