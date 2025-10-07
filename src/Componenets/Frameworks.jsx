import { OrbitCircles } from "./OrbitCircles";

export function Frameworks() {
  const skills = [
    "react",
    "github",
    "html5",
    "css3",
    "javascript",
    "tailwindcss",
    "Nodejs",
    "ExpressjsLight",
    "threejs",
    "visualstudiocode",
    "figma-svgrepo-com",
    "git",
    "Java",
    "vitejs",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icons key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitCircles>
      <OrbitCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icons key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitCircles>
    </div>
  );
}

const Icons = ({ src }) => (
  <img
    src={src}
    className="duration-200 rounded-sm hover:scale-110"
    alt="icon"
  />
);

export default Frameworks;
