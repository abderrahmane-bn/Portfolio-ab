import Card from "../Componenets/Card";
import { useRef } from "react";
import Globe from "../Componenets/Globe";
import CopyEmailButton from "../Componenets/CopyEmailButton"; 
import Frameworks from "../Componenets/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt=""
          />
          <div className="z-10">
            <p className="headtext">Hey, i'm AB</p>
            <p className="subtext">
              Over 1 year, I developed my frontend and backend dev skills
              to deliver dynamic and software and web applications
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-radient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500 pointer-events-none select-none lg:text-7xl">
              Code is Craft
            </p>
            <Card
              text="GRASP"
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              containerRef={grid2Container}
            />
            <Card
              text="SOLID"
              style={{ rotate: "-30deg", top: "65%", left: "35%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Patterns"
              style={{ rotate: "90deg", top: "30%", left: "67%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Principles"
              style={{ rotate: "-55deg", top: "55%", left: "-5%" }}
              containerRef={grid2Container}
            />
            <Card
              text="SPR"
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              containerRef={grid2Container}
              image="assets/logos/csharp-pink.png"
            />
            <Card
              style={{ rotate: "0deg", top: "70%", left: "20%" }}
              containerRef={grid2Container}
              image="assets/logos/dotnet-pink.png"
            />
            <Card
              style={{ rotate: "-30deg", top: "10%", left: "10%" }}
              containerRef={grid2Container}
              image="assets/logos/blazor-pink.png"
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
                <p className="headtext">Time Zone</p>
                <p className="subtext">I'm based in Algeria, and open to remote worldwide</p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to work together?
            </p>
            <p>
              <CopyEmailButton />
            </p>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">Specialized in a variety of languages, frameworks , libraries , and tools that allow me to build a robust and scalable applications</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
